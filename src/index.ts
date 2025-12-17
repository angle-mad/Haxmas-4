import { Hono } from "hono"
import { createWish, deleteWish, fulfillWish, listWishes } from "./db/queries"
const app = new Hono();
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

app.get("/", (c) => c.text("Beans!"))
app.get("/", (c) => c.html(`
  <h1>Welcome to My Wishes API! 🎄</h1>
  <p><a href="/api/wishes">View all wishes</a></p>
`))

// At the bottom of src/index.ts

// Determine the port: use the environment variable PORT, or default to 3000
const port = Number(process.env.PORT) || 3000

// Export the Bun server configuration
export default {
  port,
  fetch: app.fetch, // Assuming your Hono app is named 'app'
}

