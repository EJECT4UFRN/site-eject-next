import Image from 'next/image';
import Router from 'next/router';
import Link from 'next/link';

import { Container, Figure } from './styles';
import { itemVariants, variants } from '../../styles/animations';
import { motion } from 'framer-motion';

interface HeroProps {
  content: {
    title: string;
    subTitle: string;
    textBtn: string;
    background: string;
    people: string;
  };
}

export function Hero({ content }: HeroProps) {
  return (
    <Container back={content.background}>
      <motion.div variants={variants} initial="hidden" animate="visible">
        <div>
          <motion.h3 variants={itemVariants}>{content.title}</motion.h3>
          <motion.h1 variants={itemVariants}>{content.subTitle} </motion.h1>

          <motion.button
            variants={itemVariants}
            onClick={() => Router.push('/solucao')}
          >
            {content.textBtn}
          </motion.button>
        </div>
        <Figure back={content.background}>
          <div>
            <motion.span variants={variants} initial="hidden" animate="visible">
              <Image
                height={1386} // Provisório para o GO!RN
                width={1135} // Provisório para o GO!RN
                src={content.people}
                alt="Mulher segurando tablet"
              />
            </motion.span>
          </div>
        </Figure>
      </motion.div>
      <img src="/svgs/triangles.svg" alt="triangulos" />
    </Container>
  );
}
