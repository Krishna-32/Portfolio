
import NextAuth, { User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { findUserByEmail } from './app/data/users'

export const { handlers : {GET, POST}, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
       async authorize(credentials) {
        if (!credentials) return null;

        try {
          const user = findUserByEmail(credentials?.email as string);
          if (user) {
            const isMatch = user?.password === credentials?.password; 
            if (isMatch) {
              return (user as unknown as User);
            }
            else {
              throw new Error("Invalid password");
            }
          }
          else{
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error as string);
        }
       }
    }),
  ]
})
