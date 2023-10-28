import NextAuth from 'next-auth';
import { options } from '@/lib/auth';

const config = NextAuth(options);

export { config as GET, config as POST };
