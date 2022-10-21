import Link from "next/link";

import ResponsiveSlide from "./responsiveSlide";

import { Container, Card, CardBack, Services } from "./styles";

interface Service {
  id: number;
  titulo: string;
  format_title_front: string;
  conteudoServicos: string;
  conteudoBack: string;
  imageFront: string;
  icone: string;
  button: string;
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
                src={`https://res.cloudinary.com/eject/${service.icone}`}
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
