import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavbarComponents from "@/components/layouts/Navbar";
import FooterComponents from "@/components/layouts/Footer";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Rental",
  description: "We Care You Care I Kere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
          }}
        />
        <NavbarComponents />
        {children}
        <FooterComponents />
      </body>
    </html>
  );
}
