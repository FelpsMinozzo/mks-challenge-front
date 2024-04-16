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


import React from "react";
import Products from '@/components/products/productGrid'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#F9F9F9] overflow-hidden">
        <div>
          <Header/>
          <Sidebar/>
        </div>
        <main className="">
          {children}
        </main>
        <div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}

