import './globals.css';
import { DM_Sans, Poppins } from 'next/font/google';

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans'
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} ${poppins.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
