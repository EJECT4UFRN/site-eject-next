import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import React from "react";
import Router from "next/router";

import { Layout } from "../components/Layout";
import api from "../services/api";
import { variants } from "../styles/animations";

import { Main, Card, Hero } from "../styles/templates/Clients";

interface Data {
  banner: string;
  card: {
    id: number;
    button: string;
    imagem: string;
    nome: string;
    site_img: string;
  }[];
  descricao: string;
  id: number;
  titulo_banner: string;
}

interface ClientProps {
  content: Data;
}

export default function Clients({ content }: ClientProps) {
  return (
    <Layout>
      <Hero>
        <motion.h1 variants={variants} initial="hidden" animate="visible">
          {content.titulo_banner}
        </motion.h1>
      </Hero>
      <Main>
        <h4>{content.descricao}</h4>
        <div>
          {content.card.map((content) => (
            <Card key={content.id}>
              <div>
                <img
                  src={`https://res.cloudinary.com/eject/${content.imagem}`}
                  alt={content.nome}
                />
              </div>
              <aside>
                <h3>{content.nome}</h3>

                <button onClick={() => Router.push(`${content.button}`)}>
                  ver mais
                </button>
              </aside>
            </Card>
          ))}
        </div>
      </Main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("portifolio");

  return {
    props: {
      content: data[0],
    },
  };
};
