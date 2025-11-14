import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Redditobooks",
  description: "Bookkeeping solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,601,700,701,800,801,900,901,1,2&f[]=general-sans@400,401,500,501,600,601,700,701&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
