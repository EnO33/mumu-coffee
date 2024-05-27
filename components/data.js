import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/coffee-barista.svg";
import benefitTwoImg from "../public/img/friends-coffee.svg";

const benefitOne = {
  title: "Découvrez nos avantages",
  desc: "Au Mumu Café, nous mettons tout en œuvre pour offrir une expérience unique à nos clients. Découvrez ci-dessous quelques-uns des principaux avantages que nous offrons.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Comprenez vos clients",
      desc: "Nous utilisons des outils avancés pour analyser les préférences et les habitudes de nos clients, afin de personnaliser chaque visite et de mieux répondre à leurs attentes.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Améliorez l'acquisition",
      desc: "Grâce à nos campagnes de marketing ciblées et à nos offres promotionnelles attractives, nous attirons continuellement de nouveaux clients qui deviennent des habitués fidèles.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Favorisez la fidélisation des clients",
      desc: "Nous offrons un programme de fidélité généreux et des événements exclusifs pour encourager nos clients à revenir régulièrement et à rester engagés avec notre marque.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Découvrez encore plus d'avantages",
  desc: "Utilisez cette mise en page avec une image inversée pour mettre en avant d'autres avantages de notre café. Comme dans la section précédente, vous pouvez inclure une image ou une illustration accompagnée de quelques points forts.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Template responsive sur mobile",
      desc: "Le site web du Mumu Café est conçu pour être entièrement responsive et offrir une expérience utilisateur optimale sur tous les appareils.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Propulsé par Next.js et TailwindCSS",
      desc: "Notre site utilise les dernières technologies pour assurer une performance et une flexibilité maximales.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Mode clair et sombre",
      desc: "Le site du Mumu Café propose un mode clair et un mode sombre, configurables sans effort pour un confort visuel optimal.",
      icon: <SunIcon />,
    },
  ],
};



export {benefitOne, benefitTwo};
