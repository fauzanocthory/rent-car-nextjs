import {
    type DefaultSession,
    type DefaultUser,
  } from "next-auth";   
  
  declare module "next-auth" {
    interface Session extends DefaultSession {
      user: DefaultSession["user"] & {
        role?: string;
      };
    }
    interface User extends DefaultUser {
      role?: string;
    }
  }