import Link from "next/link";

import { Layout } from "../../components/Layout";
import { CountDown } from "../../components/CountDown";
import { VideoWindow } from "../../components/VideoWindow";
import { LogoProSempre } from "../../components/LogoProSempre";

import { NextSeo } from "next-seo";

import {
  Container,
  Hero,
  AboutUs,
  Buttons,
} from "../../styles/templates/ProSempre";
import api from "../../services/api";
import { GetStaticProps } from "next";
import { SectionWhy } from "../../components/SectionWhy";

interface ProSempreProps {
  dataPage: {
    id: number;
    edicao: string;
    countDateInicio: string;
    countDate: string;
    video: null;
    edital: string;
    whats: string;
    link_formulario_inscricao: string;
  };
}

export default function ProSempre({ dataPage }: ProSempreProps) {
  return (
    <>
      <NextSeo
        title="EJECT | ProSempre"
        description="Processo seletivo da Eject | ProSempre"
        canonical="https://www.ejectufrn.com.br/quem-somos/prosempre"
      />
      <Layout>
        <Container>
          <img src="/svgs/triangles.svg" alt="Conjunto de triangulos" />
          <img src="/svgs/triangles.svg" alt="Conjunto de triangulos" />
          <img src="/svgs/triangles.svg" alt="Conjunto de triangulos" />

          <div>
            <Hero>
              <h2>Bem-vindos ao </h2>
              <div>
                <LogoProSempre />
                <span>{dataPage.edicao}</span>
              </div>
            </Hero>
            <AboutUs>
              <div>
                <img src="/images/whenAre.png" alt="quem somos" />
              </div>
              <p>
                A EJECT é uma empresa júnior que desenvolve soluções digitais
                para transformar pessoas em protagonistas no meio digital.
              </p>
            </AboutUs>
            <CountDown
              startDate={dataPage.countDateInicio}
              endDate={dataPage.countDate}
            />
            <VideoWindow />
            <SectionWhy
              title={"PORQUÊ SE INSCREVER?"}
              firstText={"Experiência profissional ainda na faculdade"}
              secondText={"Desenvolvimento de soft skills"}
              tertiaryText={
                "Aumento da sua rede de relacionamentos (Networking)"
              }
              lastText={"Ajudar a impactar positivamente a sociedade"}
            >
              <Buttons>
                <Link href={dataPage.link_formulario_inscricao}>
                  <a target="_blank">FAZER INSCRIÇÃO</a>
                </Link>
                <Link href={dataPage.edital}>
                  <a download target="_blank">
                    BAIXAR EDITAL
                  </a>
                </Link>
              </Buttons>
            </SectionWhy>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get(`prosempre-page
  `);

  return {
    props: {
      dataPage: data[0],
    },
    revalidate: (60 * 10)/2, // 5 min
  };
};
