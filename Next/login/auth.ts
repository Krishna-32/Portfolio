import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import { findUserByEmail } from './app/data/users';

export const {
 handlers: {GET, POST},
 auth,
 signIn,
 signOut,
} = NextAuth({
 session: {
  strategy: 'jwt',
},
providers: [
  CredentialsProvider({
     async authorize(credentials) {
      if (!credentials?.email || !credentials?.password) return null;

      try {
        const user = findUserByEmail(credentials.email as string);
        if (user) {
          const isMatch = user?.password === credentials?.password;
          if (isMatch) {
            return {
              id: user.id.toString(),
              email: user.email
            };
          }
        }
        else {
          throw new Error("User not found");
        }
        return null;
      } catch (error) {
        if (error instanceof Error) {
          throw error;
        }
        throw new Error('An unknown error occurred');
      }
     }
  }),
]
})