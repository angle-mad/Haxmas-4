import { db } from "./index"
import { wishes, cookies } from "./schema"
import { eq, desc } from "drizzle-orm"

//Wishes functions (Items,)
export function listWishes() {
  return db.select().from(wishes).orderBy(desc(wishes.id)).all()
}

export function createWish(item: string) {

  const createdAt = Math.floor(Date.now() / 1000)

  const res = db.insert(wishes).values({
    item,
    fulfilled: 0,
    createdAt,
  }).run()

  return { id: Number(res.lastInsertRowid) }
}

export function fulfillWish(id: number) {
  const res = db.update(wishes)
    .set({ fulfilled: 1 })
    .where(eq(wishes.id, id))
    .run()

  return { changes: res.changes }
}

export function deleteWish(id: number) {
  const res = db.delete(wishes).where(eq(wishes.id, id)).run()
  return { changes: res.changes }
}


//Cookies functions (Cookie)
export function listCookies() {
  return db.select().from(cookies).orderBy(desc(cookies.id)).all()
}

export function createCookie(item: string) {
  if (item === "Oatmeal Raisin") {
    throw new Error("I hope you rot like these cookies do at parties.")
  }

  const createdAt = Math.floor(Date.now() / 1000)

  const res = db.insert(cookies).values({
    item,
    eaten: 0,
    createdAt,
  }).run()

  return { id: Number(res.lastInsertRowid) }
}

export function eatCookie(id: number) {
  const res = db.update(cookies)
    .set({ eaten: 1 })
    .where(eq(cookies.id, id))
    .run()

  return { changes: res.changes }
}

export function deleteCookie(id: number) {
  const res = db.delete(cookies).where(eq(cookies.id, id)).run()
  return { changes: res.changes }
}
