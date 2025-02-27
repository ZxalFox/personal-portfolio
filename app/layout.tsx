import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayron Sanfra",
  description:
    "Hi, I'm Ayron Sanfra, a fullstack software engineer and web developer.",
  openGraph: {
    title: "Ayron Sanfra - Fullstack Software Engineer",
    description:
      "Hi, I'm Ayron Sanfra, a fullstack software engineer and web developer.",
    images: [
      {
        url: "https://personal-portfolio-nine-beige-18.vercel.app/opengraph-image.png",
        width: 800,
        height: 800,
        alt: "Ayron Sanfra - Fullstack Software Engineer",
      },
    ],
    type: "website",
    siteName: "Ayron Sanfra",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
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
          href="/hero-animation.json"
          as="fetch"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
