import Link from 'next/link';
import React from 'react';
import { MastroImage } from './customSVG';
import { Container, Title, Descrition } from './styles';

export function OurMission({ mission }) {
  const [data] = mission;

  const [titleTop, titleBottom] = data.titulo.split(' ');

  return (
    <Container>
      <main>
        <div>
          <MastroImage />
        </div>

        <Title>
          <span>{titleTop}</span>
          <span>{titleBottom}</span>
        </Title>
        <Descrition>
          <p>{data.descricao}</p>
          <Link href="/quem-somos">
            <button>{data.titulo_botao}</button>
          </Link>
        </Descrition>
        <img src="/svgs/triangles.svg" alt="" />
      </main>
    </Container>
  );
}
