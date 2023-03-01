import Head from "next/head";
// import Image from 'next/image'
import { Inter } from "next/font/google";
import Header from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Airbnb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Nav */}
      <Header />

      {/* Banner */}
    </>
  );
}
