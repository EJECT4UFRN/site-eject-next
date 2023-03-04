import Link from "next/link";

import ResponsiveSlide from "./responsiveSlide";

import { Container, Card, CardBack, Services } from "./styles";

interface Service {
  format_title_front: string;
  imageFront: string;
  icone: string;
  conteudoBack: string;
  button: string;
  conteudoServicos: string;
}

interface OurServicesProps {
  services: Array<Service>;
}

export function OurServices({ services }: OurServicesProps) {
  return (
    <Container>
      <h1>Nossos Serviços</h1>
      <Services>
        {services.map((service, index) => (
          <Card key={Math.random() * index}>
            <div className="cardFront">
              <img
                src={service.icone}
                alt={service.conteudoServicos}
              />

              <h2>{service.format_title_front}</h2>
            </div>

            <CardBack>
              <h2>{service.format_title_front}</h2>
              <p>{service.conteudoBack}</p>
            </CardBack>
          </Card>
        ))}
      </Services>
      <ResponsiveSlide services={services} />
      <Link href="/solucao">
        <button>VER MAIS</button>
      </Link>
    </Container>
  );
}
