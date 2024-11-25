import { Metadata } from "next";
import Head from "next/head";
import Navbar from "../components/sharedComponents/Navbar/Navbar";
import Footer from "../components/sharedComponents/Footer/Footer";

export const metadata: Metadata = {
  title: "Geekify",
  description: "Generated by create next app",
};

export default function layout({children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="public/favicon.ico"
          sizes="any"
          type="image/x-icon"
        />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
