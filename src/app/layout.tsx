import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

// Load the Lato font with subsets
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
});

export const metadata: Metadata = {
  title: "Karthik Nayak",
  description: "KARTHIK'S PORTFOLIO",
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
    <html lang="en" className={lato.className}>
      {" "}
      {/* Apply the Lato font */}
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className="bg-orange-100">{children}</body>
    </html>
  );
}
