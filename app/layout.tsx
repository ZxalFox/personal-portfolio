import type { Metadata } from "next";
import "./globals.css";
import favicon from "./favicon.ico";
import appleFavicon from "./favicon.png";

const firaCode = {
  subsets: ["latin"],
  variable: "--font-fira-code",
};

export const metadata: Metadata = {
  title: "Ayron Sanfra",
  description:
    "Hi, I'm Ayron Sanfra, a fullstack software engineer and web developer.",
  openGraph: {
    images: [
      {
        url: "https://personal-portfolio-nine-beige-18.vercel.app/favicon.png",
        width: 800,
        height: 800,
        alt: "Ayron Sanfra",
      },
    ],
  },
  icons: {
    icon: favicon.src,
    shortcut: favicon.src,
    apple: appleFavicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="../public/hero-animation.json"
          as="fetch"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${firaCode.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
