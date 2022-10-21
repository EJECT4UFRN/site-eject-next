import React from 'react';
import { ResponsiveSlidePartners } from './responsiveSlide';
import { Container, ContentText, ContentPartners } from './styles';

export function OurPartners({ partners }) {
  const [data] = partners;
  const { parceiros_object } = data;
  const firstHalf = parceiros_object.slice(0, 3);
  const secondHalf = parceiros_object.slice(3, 6);

  return (
    <Container>
      <div>
        <ContentText>
          <h1>{data.titulo}</h1>
          <p>{data.descricao}</p>
        </ContentText>
        <ContentPartners>
          <div>
            {firstHalf.map((partner) => (
              <img
                key={partner.id}
                src={`https://res.cloudinary.com/eject/${partner.logo}`}
                alt=""
              />
            ))}
          </div>
          <div>
            {secondHalf.map((partner) => (
              <img
                key={partner.id}
                src={`https://res.cloudinary.com/eject/${partner.logo}`}
                alt=""
              />
            ))}
          </div>
        </ContentPartners>
        <ResponsiveSlidePartners partners={{ firstHalf, secondHalf }} />
      </div>
    </Container>
  );
}
