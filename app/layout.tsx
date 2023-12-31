import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hao Duong Blog',
  description:
    'A blog that showcases my travels, photograph and life in general.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`w-screen lg:h-screen ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
