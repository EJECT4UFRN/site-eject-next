import Link from "next/link";

import { Container, Content } from "./styles";

interface FooterProps {
  footerInformations: {
    celular: string;
    email: string;
    localizacao: string;
  }[];
  socialMedias: {
    facebook: string;
    instagram: string;
    linkedin: string;
  }[];
}

export function Footer({ footerInformations, socialMedias }: FooterProps) {
  return (
    <Container>
      <Content>
        <div>
          <img src="/svgs/logo-eject.svg" alt="Logo Eject" />
        </div>
        <ul>
          <h2>Sobre</h2>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/quem-somos">
              <a>Quem Somos</a>
            </Link>
          </li>
          <li>
            <Link href="/solucao">
              <a href="#">Solução</a>
            </Link>
          </li>
          <li>
            <Link href="/contato">
              <a>Contatos</a>
            </Link>
          </li>
        </ul>
        <ul>
          <h2>serviços</h2>
          <li>
            <Link href="/solucao#1">
              <a>Sites e Sistemas</a>
            </Link>
          </li>
          <li>
            <Link href="/solucao#2">
              <a>E-commerce</a>
            </Link>
          </li>
          <li>
            <Link href="/solucao#3">
              <a>Consultoria</a>
            </Link>
          </li>
          <li>
            <Link href="/solucao#4">
              <a>Concepção</a>
            </Link>
          </li>
        </ul>
        <ul>
          <h2>Endereço</h2>
          <li>
            Instituto Metrópole Digital (IMD - UFRN),
            <br /> sala B412 (4° piso)
            <br /> Av. Capitão Mor. Gouvéia, Lagoa Nova, <br />
            CEP: 59075-050
          </li>
        </ul>
        <ul>
          <div>
            <h2>Fale Conosco</h2>
            <li>{footerInformations[0].celular}</li>
            <li>{footerInformations[0].email}</li>
          </div>
          <span>
            <a href={socialMedias[0].instagram}>
              <img src="/svgs/insta.svg" alt="Logo Instagram" />
            </a>
            <a href={socialMedias[0].facebook} target="_blank">
              <img src="/svgs/face.svg" alt="Logo Facebook" />
            </a>
            <a href={socialMedias[0].linkedin} target="_blank">
              <img src="/svgs/linkedin.svg" alt="Logo Linkedin" />
            </a>
          </span>
        </ul>
      </Content>
      <p>
        Feito com <strong>foco </strong>e <strong>compromisso</strong> pela
        EJECT
      </p>
    </Container>
  );
}
