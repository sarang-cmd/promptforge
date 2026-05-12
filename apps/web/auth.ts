import NextAuth, { type NextAuthResult } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@repo/db";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

const result = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});

export const handlers = result.handlers;
export const auth: NextAuthResult["auth"] = result.auth;
export const signIn = result.signIn;
export const signOut = result.signOut;
