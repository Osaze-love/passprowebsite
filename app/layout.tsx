import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Raleway } from "next/font/google";
import ClientProvider from "./ClientProvider";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Passpro",
  description: "Passpro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
      <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}