import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CreadentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/prisma/prisma-client';
import { compare } from 'bcrypt';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CreadentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const values = {
          email: credentials.email,
        };

        const findUser = await prisma.user.findFirst({
          where: values,
        });

        if (!findUser) return null;
        const isPasswordValid = await compare(credentials.password, findUser.password);
        if (!isPasswordValid) return null;

        if (!findUser.verified) return null;

        return {
          id: String(findUser.id),
          email: findUser.email,
          name: findUser.fullName,
          role: findUser.role,
        };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
