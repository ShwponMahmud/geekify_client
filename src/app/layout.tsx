import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from 'next/head';
import { Montserrat, Poppins } from 'next/font/google'

const montserrat = Montserrat({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Geekify",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <html lang="en">
       <Head>
        <link rel="icon" href="public/favicon.ico" sizes="any" type="image/x-icon" />
      </Head>
      <body
        className={montserrat.className}
      >
        {children}
      </body>
    </html>
  );
}
