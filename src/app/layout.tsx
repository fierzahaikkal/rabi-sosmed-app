import { getAuthSession, options } from '@/lib/auth';
import './globals.css';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Poppins } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import SessionProvider from '@/components/Providers';

const font = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rabi Ceritakan Harimu',
  description: 'Platform berbagi pengalaman untuk semua',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getAuthSession();
  return (
    <html lang="en">
      <body className={font.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
