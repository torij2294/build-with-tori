import './globals.css'
import { Source_Sans_3, Playfair_Display } from 'next/font/google';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans-3'
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sourceSans3.variable} ${playfairDisplay.variable} ${sourceSans3.className} ${playfairDisplay.className}`}>
        {children}
      </body>
    </html>
  );
}
