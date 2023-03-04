import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

import api from "../services/api";

import { Layout } from "../components/Layout";
import { Accountants } from "../components/Accountants";
import { OurServices } from "../components/OurServices";
import { OurPartners } from "../components/OurPartners";
import { OurMission } from "../components/OurMission";
import { Hero } from "../components/Hero";
import { Diagnosis } from "../components/Diagnosis";
import { SectionFromAccessPosts } from "../components/SectionFromAccessPosts";
import FeedBacks from "../components/FeedBacks";
import { SectionPortifolio } from "../components/SectionPortifolio";

import Prismic from "@prismicio/client";
import { getPrismicClient } from "../services/prismic";

export default function Home({
  hero,
  contadores,
  depositions,
  diagnostico,
  missao,
  parceiros,
  portifolio,
  services,
  postContent,
}) {
  return (
    <>
      <NextSeo
        title="EJECT | Desenvolvimento Web"
        description="Empresa de tecnologia focada em desenvolver sites, sistemas e consultoria em marketing."
        canonical="https://www.ejectufrn.com.br"
        openGraph={{
          url: "https://www.ejectufrn.com.br",
          title: "EJECT | Desenvolvimento Web",
          description:
            "Empresa de tecnologia focada em desenvolver sites, sistemas e consultoria em marketing.",
          images: [
            {
              url: "https://media-exp1.licdn.com/dms/image/C4E0BAQG4i54H4R199g/company-logo_200_200/0/1605790959908?e=2159024400&v=beta&t=iA8EGvVr4Lex15b9SIMCOfWImDMuxo9dKpX81oTe59w",
              width: 200,
              height: 200,
              alt: "Logomarca da empresa de tecnologia Eject",
            },
          ],
        }}
      />
      <Layout>
        <Hero content={hero} />
        <Accountants count={contadores} />
        <OurServices services={services.card} />
        <FeedBacks depositions={depositions} />
        <Diagnosis diagnosis={diagnostico} />
        <OurMission mission={missao} />
        {/* <SectionPortifolio portifolioContent={portifolio} /> */}
        <SectionFromAccessPosts postContent={postContent} />
        <OurPartners partners={parceiros} />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get(`secao-inicial`);
  const [content] = data;

  const prismic = getPrismicClient();
  const responsePrismic = await prismic.query(
    [Prismic.Predicates.at("document.type", "post")],
    {
      pageSize: 1,
      orderings: "[document.last_publication_date desc]",
    }
  );

  const postsFormatted = responsePrismic.results.map((post) => ({
    id: post.id,
    slug: post.uid,
    title: post.data.titulo,
    author: post.data.autor,
    role: post.data.funcao,
    profile: {
      url: post.data.perfil_do_autor.url,
      width: post.data.perfil_do_autor.dimensions.width,
      height: post.data.perfil_do_autor.dimensions.height,
      alt: post.data.perfil_do_autor.alt,
    },
  }));

  const {
    contadores,
    depoimentos,
    diagnostico,
    missao,
    parceiros,
    portifolio,
    servicos,
  } = content;

  const [services] = servicos;

  return {
    props: {
      hero: {
        title: content.titulo,
        subTitle: content.subtitulo,
        textBtn: content.titulo_botao,
        background: content.fundo,
        people: content.pessoa_modelo,
      },
      contadores,
      depositions: depoimentos,
      diagnostico,
      missao,
      parceiros,
      portifolio: portifolio[0],
      services,
      postContent: postsFormatted,
    },
    revalidate: 60 * 60 * 8,
  };
};