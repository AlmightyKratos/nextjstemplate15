import { redirect } from "next/navigation"
import { tasksTb } from "@/db/app"
import { auth } from "@/auth"
import { db } from "@/db/db"

export const redirectOrGetUserId = async () => {
  const session = await auth()
  if (!session?.user?.id) {
    redirect("/")
  } else {
    return session.user.id
  }
}

export const createTask = async () => {
  await db.insert(tasksTb).values({ name: "hi" })
}
