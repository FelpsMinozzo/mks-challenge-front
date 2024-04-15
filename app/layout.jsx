import { Inter } from "next/font/google";
import "./css/globals.css";
import "./css/sass/main.scss"
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import Sidebar from "../components/sidebar/sidebar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MKS Sistemas",
  description: "",
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="overflow-hidden z-1">
        <Header className="z-1"/>
        <Sidebar />
        {children}
        <Footer className="z-1"/>
      </body>
    </html>
  );
}
