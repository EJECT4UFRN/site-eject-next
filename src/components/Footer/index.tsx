import Link from "next/link";
import CookieConsent from "react-cookie-consent";
import { boolean } from "yup";
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
    youtube: string;
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
          <li>
            <Link href="/terms-of-use">
              <a>Política de Privacidade</a>
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
            <Link href="/solucao#4">
              <a>Concepção</a>
            </Link>
          </li>
        </ul>
        <ul>
          <h2>Endereço</h2>
          <li>
            <p id="p_localizacao">{footerInformations[0].localizacao}</p>
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
            <a
              href={socialMedias[0].youtube} target="_blank"
              id="social_youtube"
            >
              <img src="/svgs/youtube.svg" alt="Logo Youtube" />
            </a>
          </span>
        </ul>
      </Content>
      <p>
        Feito com <strong>foco </strong>e <strong>compromisso</strong> pela
        EJECT
      </p>

      {/* <CookieConsent debug={true} style={{background:'#1b1e23', textAlign: "center"}} 
        buttonStyle={{ background: "linear-gradient(92.07deg,#0995db 1.84%,#11a7f1 100%)", 
        color:"#FFF", borderRadius: "5px"}} 
        expires={365} buttonText="OK" overlay>
        Este site utiliza cookies para proporcionar uma experiência de navegação melhor. consulte nossa 
        <a href="/terms-of-use" style={{color:"#0995db"}}> Política de Privacidade</a>
        </CookieConsent> */}

    </Container>
  );
}
