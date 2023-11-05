import { getServerSession, NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { db } from '@/lib/db';

export const options: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: '/signin', signOut: '/signout', newUser: '/signup' },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    // CredentialsProvider({
    //   credentials: {
    //     authorize: async (credentials: { email: string; password: string }) => {
    //       try {
    //         const res = await fetch('api/auth/signin', {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify(credentials),
    //         });
    //         const data = await res.json();
    //         if (res.ok && data) {
    //           return Promise.resolve(data);
    //         } else {
    //           return Promise.reject(new Error(data?.message || 'Failed to login'));
    //         }
    //       } catch (error) {
    //         return Promise.reject(error);
    //       }
    //     },
    //   },
    // }),
  ],callbacks: {
    async session({ session, token, user }) {
      const getToken = await db.account.findFirst({
        where: {
          userId: user.id,
        },
      });
      let accessToken: string | null = null;
      if (getToken) {
        accessToken = getToken.access_token!;
      }
      session.user.token = accessToken;
      return session;
    },
  },
  
};

export const getAuthSession = () => getServerSession(options);
