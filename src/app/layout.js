import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Curso de Next JS",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Nav />
        </header>
        {children}
      </body>
    </html>
  );
}
