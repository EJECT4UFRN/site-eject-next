import { useState } from "react";
// import Carousel from "react-spring-3d-carousel";
import dynamic from "next/dynamic";
import Image from "next/image";
import { config } from "react-spring";

const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

import { Container, Circle, SlideItem } from "./styles";

type SettingsType = {
  goToSlide: number;
  offsetRadius: number;
  showNavigation: boolean;
  config: {
    readonly tension: number;
    readonly friction: number;
  };
};

interface SectionPortifolioProps {
  portifolioContent: {
    banner: string;
    card: {
      id: number;
      nome: string;
      imagem: string;
    }[];
  };
}

export function SectionPortifolio({
  portifolioContent,
}: SectionPortifolioProps) {
  const [settings, setSettings] = useState<any>({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
    autoPlay: true,
    autoplaySpeed: 2000,
  });

  const params = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
  };

  // button: "https://www.rnjunior.com.br/",
  // id: 2,
  // imagem: "image/upload/v1636379936/rn-junior.png",
  // nome: "RN Júnior",
  // site_img: "image/upload/v1636379661/rn_junior_card.png"
  const a = {
    button: "https://www.rnjunior.com.br/",
    id: 2,
    imagem: "image/upload/v1636379936/rn-junior.png",
    nome: "RN Júnior",
  };

  // const dale = portifolioContent?.card?.push(a);

  // console.log("a", dale);

  const formattedSlide = portifolioContent.card.map((site) => ({
    key: site.id,
    content: (
      <SlideItem>
        <span>
          {[1, 2, 3].map((circle) => (
            <Circle key={circle} />
          ))}
        </span>

        <img
          src={`https://res.cloudinary.com/eject/image/upload/v1636380265/Lumus.png`}
          alt={site.nome}
        />
      </SlideItem>
    ),
  }));

  // "https://res.cloudinary.com/eject/image/upload/v1636379936/rn-junior.png"
  // image / upload / v1636380265 / Lumus.png;

  const newSlides = formattedSlide.map((slide, index) => {
    return {
      ...slide,
      onClick: () => setSettings({ goToSlide: index }),
    };
  });

  // let slides = portifolioContent.map((slide, key) => (
  //   {
  //     ...slide,

  //   }
  // ))

  let slides = [
    {
      key: 99,
      content: (
        <SlideItem>
          <span>
            {[1, 2, 3].map((circle) => (
              <Circle key={circle} />
            ))}
          </span>
          <img src="/images/screen-lumus.png" alt="Card solucao" />
        </SlideItem>
      ),
    },
    {
      key: 88,
      content: (
        <SlideItem>
          <span>
            {[1, 2, 3].map((circle) => (
              <Circle key={circle} />
            ))}
          </span>
          <img src="/images/screen-lumus.png" alt="Card solucao" />
        </SlideItem>
      ),
    },
    {
      key: 1,
      content: (
        <SlideItem>
          <span>
            {[1, 2, 3].map((circle) => (
              <Circle key={circle} />
            ))}
          </span>
          <img src="/images/screen-lumus.png" alt="Card solucao" />
        </SlideItem>
      ),
    },
    {
      key: 2,
      content: (
        <SlideItem>
          <span>
            {[1, 2, 3].map((circle) => (
              <Circle key={circle} />
            ))}
          </span>
          <img src="/images/screen-lumus.png" alt="Card solucao" />
        </SlideItem>
      ),
    },
    {
      key: 3,
      content: (
        <SlideItem>
          <span>
            {[1, 2, 3].map((circle) => (
              <Circle key={circle} />
            ))}
          </span>
          <img src="/images/screen-lumus.png" alt="Card solucao" />
        </SlideItem>
      ),
    },
    {
      key: 4,
      content: (
        <SlideItem>
          <span>
            {[1, 2, 3].map((circle) => (
              <Circle key={circle} />
            ))}
          </span>
          <img src="/images/screen-lumus.png" alt="Card solucao" />
        </SlideItem>
      ),
    },
    {
      key: 5,
      content: (
        <SlideItem>
          <span>
            {[1, 2, 3].map((circle) => (
              <Circle key={circle} />
            ))}
          </span>
          <img src="/images/screen-lumus.png" alt="Card solucao" />
        </SlideItem>
      ),
    },
  ].map((slide, index) => {
    return {
      ...slide,
      onClick: () => setSettings({ goToSlide: index }),
    };
  });

  // return (
  //   <Container style={{}}>
  //     <h2>PORTIFOLIO</h2>
  //     <Carousel
  //       slides={newSlides}
  //       goToSlide={settings.goToSlide}
  //       offsetRadius={settings.offsetRadius}
  //       showNavigation={settings.showNavigation}
  //       animationConfig={settings.config}
  //       {...params}
  //     />
  //   </Container>
  // );
  return (
    <Container>
      <h2>PORTIFOLIO</h2>
      <div style={{ width: "80%", height: "17rem", margin: "1rem auto" }}>
        <Carousel
          slides={slides}
          goToSlide={settings.goToSlide}
          offsetRadius={settings.offsetRadius}
          showNavigation={settings.showNavigation}
          animationConfig={settings.config}
          {...params}
        ></Carousel>
      </div>
      <button>Visitar site</button>
    </Container>
  );
}
