import { Inter } from "next/font/google";
import "./globals.css";
import CHeader from "./components/CHeader";
import CFooter from "./components/CFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "lilliputl.ink - Lilliput Your Link",
  description: "Made with love by Shohan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CHeader />
        {children}
        <CFooter />
      </body>
    </html>
  );
}
