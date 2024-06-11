import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/provider/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Mahsa's Admin Dashboard",
  description: "Mahsa's Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={true}
          storageKey='dashboard-theme'
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
