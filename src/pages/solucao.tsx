import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Layout } from '../components/Layout';
import api from '../services/api';
import { itemVariants, variants } from '../styles/animations';

import { Template, CardContent } from '../styles/templates/Solution';

export default function Solution({ pageData }) {
  const [data] = pageData;
  const { card } = data;

  return (
    <Layout>
      <Template>
        <motion.div variants={variants} initial="hidden" animate="visible">
          <motion.h3 variants={itemVariants}>{data.frase}</motion.h3>
          {card.map((content) => (
            <CardContent
              key={content.id}
              id={content.id}
              variants={itemVariants}
            >
              <div>
                <img
                  src={content.imageFront}
                  alt={content.format_title_front}
                  width={330}
                  height={190}
                />
              </div>
              <aside>
                <h2>{content.format_title_front}</h2>
                <p>{content.conteudoBack}</p>

                <Link href="/contato">
                  <button>{content.button}</button>
                </Link>
              </aside>
            </CardContent>
          ))}
        </motion.div>
      </Template>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get(`solucoes`);

  return {
    props: {
      pageData: data,
    },
    revalidate: 60 * 60 * 8,
  };
};
