import Link from "next/link";
import Image from "next/image";

import { Layout } from "../../components/Layout";
import { OurValues } from "../../components/OurValues";
import { OurTeam } from "../../components/OurTeam";

import {
  Hero,
  Container,
  TextContent,
  Recognition,
  ProSempre,
} from "../../styles/templates/AboutUs";

import { GetStaticProps } from "next";

import api from "../../services/api";
import { motion } from "framer-motion";
import { variants } from "../../styles/animations";
import { LogoProSempre } from "../../components/LogoProSempre";

interface phrase {
  id: number;
  paragrafo: string;
}

interface AboutUsProps {
  hero: {
    id: number;
  };
  textContent: {
    subTitle: string;
    phrase: Array<phrase>;
  };
  teamImage: {
    image: string;
  };
  vision: {
    title: string;
    description: string;
  };
  ourValues: {
    id: number;
    image: string;
    hover: string;
  };
  recognition: {
    id: number;
    year: number;
    trophies: string;
  }[];
}

export default function AboutUs({
  hero,
  textContent,
  teamImage,
  vision,
  ourValues,
  recognition,
  team,
  edition,
}) {
  const [first, last] = textContent.phrase;

  return (
    <Layout>
      <Container>
        <Hero>
          <motion.h1 variants={variants} initial="hidden" animate="visible">
            {hero.title}
          </motion.h1>
          <img src="/svgs/triangles-our.svg" alt="triangulos flutuantes" />
        </Hero>
        <TextContent>
          <div>
            <h2>{textContent.subTitle}</h2>
          </div>
          <div>
            <p>
              {first.paragrafo}
              <br />
              <br />
              {last.paragrafo}
            </p>
          </div>
        </TextContent>
        <Image
          width={1425} // Provisório para o GO!RN
          height={708}  // Provisório para o GO!RN
          src={teamImage.image}
          alt="Fotos dos membros da Eject"
        />
        {vision.map((vis) => (
          <TextContent key={vis.id}>
            <div>
              <h2>{vis.titulo}</h2>
            </div>
            <div>
              <p>{vis.texto}</p>
            </div>
          </TextContent>
        ))}

        <OurValues ourValues={ourValues} />

        <Recognition>
          <main>
            <div>
              <h1>Reconhecimentos</h1>
              {recognition.map((value) => {
                return (
                  <span key={value.id}>
                    <h1>{value.year}</h1>
                    <p>{value.trophies} </p>
                  </span>
                );
              })}
            </div>
          </main>
        </Recognition>

        <OurTeam team={team} />
        
        {/* <ProSempre>
          <div>
            <div className="logo-pro-sempre">
              <LogoProSempre />
              <span>{edition}</span>
            </div>
            <div>
              <p>
                Venha fazer parte do time que transforma pessoas em
                protagonistas do empreendedorismo.
              </p>
              <Link href="/quem-somos/prosempre">
                <button>Fazer inscrição</button>
              </Link>
            </div>
          </div>
        </ProSempre> */}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get(`quem-somos`);
  const {
    data: [proSempreEdition],
  } = await api.get(`prosempre-page
  `);
  const [content] = data;

  const [values] = content.valores;

  return {
    props: {
      hero: {
        title: content.titulo,
      },
      textContent: {
        subTitle: content.subtitulo,
        phrase: content.paragrafo,
      },
      teamImage: {
        image: content.foto_galera,
      },
      team: content.equipe,
      vision: content.visao,
      ourValues: content.valores,
      recognition: content.reconhecimentos.map((values) => {
        return {
          id: values.id,
          year: values.ano,
          trophies: values.reconhecimento,
        };
      }),
      edition: proSempreEdition.edicao,
    },
    revalidate: 60 * 5,
  };
};
