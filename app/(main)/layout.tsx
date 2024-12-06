import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";


export const metadata: Metadata = {
  title: "PassPro",
  description: "List, manage and purchase event tickets seamlessly on PassPro",
};

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <body className={raleway.className}>
        
        {children}
        <Footer />
        <Toaster />

        </body>
    
  );
}