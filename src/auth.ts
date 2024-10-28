import { accounts, sessions, users, verificationTokens } from "./db/auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import GitHub from "next-auth/providers/github"
import NextAuth from "next-auth"
import { db } from "./db/db"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [GitHub],
})
