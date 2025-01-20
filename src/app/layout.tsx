import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Change from Lato to Montserrat
import "./globals.css";

// Load the Montserrat font with subsets
const montserrat = Montserrat({
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
    <html lang="en" className={montserrat.className}>
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className="bg-orange-100">{children}</body>
    </html>
  );
}
