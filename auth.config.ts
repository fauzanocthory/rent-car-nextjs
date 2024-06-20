import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
 
export default { providers: [
    GitHub({ allowDangerousEmailAccountLinking: true }), 
    Google({ allowDangerousEmailAccountLinking: true }),
],
callbacks: {
    session({ session, user }) {
      session.user.role = user.role
      return session
    }
  } 
} satisfies NextAuthConfig