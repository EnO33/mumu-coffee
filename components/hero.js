import Image from "next/image";
import Container from "./container";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Mumu Café
            </h1>
            <p className="py-5 text-lg text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 text-justify">
              Le Mumu Café est bien plus qu'un simple café. Situé au cœur de la
              ville, notre établissement offre une ambiance chaleureuse et
              conviviale où chaque visiteur peut se détendre et savourer des
              boissons et des pâtisseries de haute qualité. Que vous soyez ici
              pour une réunion professionnelle, un moment de détente entre amis
              ou simplement pour profiter de votre café préféré, nous nous
              engageons à rendre chaque visite mémorable. Avec une attention
              particulière portée aux détails et à la satisfaction de nos
              clients, Le Mumu Café est l'endroit idéal pour toutes vos envies.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src="/img/coffee.svg"
              width="616"
              height="617"
              className={"object-cover"}
              alt="Mumu Café logo"
              loading="eager"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            <span className="text-indigo-600">2000+</span> cafés servis
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
