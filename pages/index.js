import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Mumu Café</title>
        <meta name="description" content="Le Mumu Café" />
        <link rel="icon" href="/img/logo.svg" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle pretitle="Mumu Café" title="Le Mumu Café">
        Le Mumu Café est un lieu chaleureux au cœur de la ville, parfait pour se
        détendre avec des boissons et des pâtisseries de qualité. Que ce soit
        pour une réunion professionnelle ou un moment de détente, chaque visite
        est mémorable.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Explorez l'expérience Mumu Café"
        title="Découvrez notre vidéo"
      ></SectionTitle>

      <Video />
      <SectionTitle pretitle="Témoignages" title="Ce que disent nos clients">
        Quelques avis de nos clients.
      </SectionTitle>
      <Testimonials />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
