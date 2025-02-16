import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/prisma/prisma-client';
import { compare, hashSync } from 'bcrypt';
import { UserRole } from '@prisma/client';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          role: 'USER' as UserRole,
        };
      },
    }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const findUser = await prisma.user.findFirst({
          where: { email: credentials.email },
        });

        if (!findUser) return null;
        const isPasswordValid = await compare(credentials.password, findUser.password);
        if (!isPasswordValid) return null;
        if (!findUser.verified) return null;

        return {
          id: findUser.id,
          email: findUser.email,
          name: findUser.fullName,
          role: findUser.role,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },

  callbacks: {
    async signIn({ user, account }) {
      try {
        if (account?.provider === 'credentials') {
          return true;
        }

        if (!user.email) return false;

        const findUser = await prisma.user.findFirst({
          where: {
            OR: [
              { provider: account.provider, providerId: account.providerAccountId }, // 🔹 Проверь `providerId` в Prisma!
              { email: user.email },
            ],
          },
        });

        if (findUser) {
          await prisma.user.update({
            where: { id: findUser.id },
            data: {
              provider: account.provider,
              providerId: account.providerAccountId,
            },
          });
          return true;
        }

        // 🔹 Теперь `await` есть, и пользователь сохраняется в базе!
        await prisma.user.create({
          data: {
            email: user.email,
            fullName: user.name || `User #${user.id}`,
            provider: account.provider,
            providerId: account.providerAccountId,
            password: hashSync(user.id.toString(), 10),
            verified: new Date(),
          },
        });

        return true;
      } catch (error) {
        console.error('Error [SIGN_IN]', error);
        return false;
      }
    },

    async jwt({ token }) {
      const findUser = await prisma.user.findUnique({
        where: { email: token.email },
      });

      if (findUser) {
        token.id = String(findUser.id);
        token.email = findUser.email;
        token.fullName = findUser.fullName;
        token.role = findUser.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
