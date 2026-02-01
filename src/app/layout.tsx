import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Alpha Tech school",
//   icons: {
//     icon: '/favicon.png',
//   },
// };
export const metadata: Metadata = {
  title: "Alpha Tech school",
 icons: {
    icon: [
      { url: '/favicon.png/logo-high-res.png.png', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
