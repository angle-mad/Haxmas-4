import { Hono } from "hono"
import { createWish, deleteWish, fulfillWish, listWishes, createCookie, deleteCookie, eatCookie, listCookies, listSnow, createSnow, funSnow, deleteSnow, } from "./db/queries"
const app = new Hono();

//Wishes App
app.get("/api/wishes", (c) => c.json(listWishes()))

app.post("/api/wishes", async (c) => {
  const body = await c.req.json().catch(() => null)
  const item = (body?.item ?? "").toString().trim()
  if (!item) return c.json({ error: "item is required" }, 400)

  return c.json(createWish(item), 201)
})

app.patch("/api/wishes/:id/fulfill", (c) => {
  const id = Number(c.req.param("id"))
  if (!Number.isFinite(id)) return c.json({ error: "bad id" }, 400)

  const res = fulfillWish(id)
  if (res.changes === 0) return c.json({ error: "not found" }, 404)

  return c.json({ ok: true })
})

app.delete("/api/wishes/:id", (c) => {
  const id = Number(c.req.param("id"))
  if (!Number.isFinite(id)) return c.json({ error: "bad id" }, 400)

  const res = deleteWish(id)
  if (res.changes === 0) return c.json({ error: "not found" }, 404)

  return c.json({ ok: true })
})

//Cookies App
app.get("/api/cookies", (c) => c.json(listCookies()))

app.post("/api/cookies", async (c) => {
  const body = await c.req.json().catch(() => null)
  const item = (body?.item ?? "").toString().trim()
  if (!item) return c.json({ error: "item is required" }, 400)

  return c.json(createCookie(item), 201)
})

app.patch("/api/cookies/:id/eat", (c) => {
  const id = Number(c.req.param("id"))
  if (!Number.isFinite(id)) return c.json({ error: "bad id" }, 400)

  const res = eatCookie(id)
  if (res.changes === 0) return c.json({ error: "not found" }, 404)

  return c.json({ ok: true })
})

app.delete("/api/cookies/:id", (c) => {
  const id = Number(c.req.param("id"))
  if (!Number.isFinite(id)) return c.json({ error: "bad id" }, 400)

  const res = deleteCookie(id)
  if (res.changes === 0) return c.json({ error: "not found" }, 404)

  return c.json({ ok: true })
})


//Snow App
app.get("/api/snow", (c) => c.json(listSnow()))

app.post("/api/snow", async (c) => {
  const body = await c.req.json().catch(() => null)
  const item = (body?.item ?? "").toString().trim()
  if (!item) return c.json({ error: "item is required" }, 400)

  return c.json(createSnow(item), 201)
})

app.patch("/api/snow/:id/fun", (c) => {
  const id = Number(c.req.param("id"))
  if (!Number.isFinite(id)) return c.json({ error: "bad id" }, 400)

  const res = funSnow(id)
  if (res.changes === 0) return c.json({ error: "not found" }, 404)

  return c.json({ ok: true })
})

app.delete("/api/snow/:id", (c) => {
  const id = Number(c.req.param("id"))
  if (!Number.isFinite(id)) return c.json({ error: "bad id" }, 400)

  const res = deleteSnow(id)
  if (res.changes === 0) return c.json({ error: "not found" }, 404)

  return c.json({ ok: true })
})


app.get("/", (c) => c.html(`
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        body {
          background-color: #1a472a;
          text-align: center;
          }
        h1 {
          color: white;
          font-family: Arial, sans-serif;
        }
        a {
          color: #cc3535ff;
          text-decoration: underline;
          font-size: 20px;
        }
        p{
          color: #D4AF37;
        }

      </style>
    </head>
    <body>
      <h1>🎀 Welcome to my Christmas Themed Homepage 🎀</h1>
      <p> Click the Links below to view my list of wishes, the list of my favorite cookies and favorite snow activities!</p>

      <p><a href="api/wishes">View my Christmas wishes 🎁</a></p>
      <p><a href="api/cookies">View my Favorite cookies 🍪</a></p>
      <p><a href="api/snow">View my Favorite snow activities ❄️</a></p>
    </body>

  </html>
`))


const port = Number(process.env.PORT) || 3000


export default {
  port,
  fetch: app.fetch, 
}

