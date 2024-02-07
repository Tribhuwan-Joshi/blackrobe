// types/next-auth.d.ts or any other file in your project's TypeScript paths

import "next-auth";

declare module "next-auth" {
  /** Extending the built-in session types */
  interface Session {
    user: {
      /** Add the `id` property */
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  /** Extends the JWT payload */
  interface JWT {
    /** Add the `id` property */
    id?: string;
  }
}
