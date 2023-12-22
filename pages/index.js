import Head from "next/head";
import Carousel from "../components/Carousel";

import Instagram from "../components/Instagram";
import QuemSomos from "../components/QuemSomos";
import Services from "../components/Services";
import Valores from "../components/Valores";
import SimpleMap from "../components/SimpleMap";

export default function Home() {
  return (
    <div>
      <Head>
        <title>VFX - Montagens Industriais</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <QuemSomos />
      <Services />
      <Valores />
      <SimpleMap />
    </div>
  );
}
