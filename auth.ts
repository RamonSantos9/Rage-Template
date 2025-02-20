import { findUserByCredentials } from "@/lib/user";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        console.log(credentials);

        //procura usuario com credenciais
        const user = await findUserByCredentials(
          credentials.email as string,
          credentials.password as string
        );

        return user;
      },
    }),
  ],
});
