import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Africa Web",
  description: "Plan your dream travels with us",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
