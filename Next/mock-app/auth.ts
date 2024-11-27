
import NextAuth, { User as NextAuthUser } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '@/models/user'
import { authConfig } from '@/auth.config'
export const { handlers : {GET, POST}, auth, signIn, signOut} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
       async authorize(credentials) {
        if (!credentials) return null;

        try {
          const user = await User.findOne({ email: credentials?.email });
          if (user) {
            const isMatch = user?.password === credentials?.password; 
            if (isMatch) {
              return (user as unknown as NextAuthUser);
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
