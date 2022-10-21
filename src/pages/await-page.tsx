import Link from "next/link";
import Head from "next/head";

import trianglesBackImg from "../../public/svgs/triangles-await.svg";
import logoEjectImg from "../../public/svgs/logo-eject.svg";

import { Template, Content } from "../styles/templates/Await";

export default function AwaitPage() {
  return (
    <Template>
      <Head>
        <title>EJECT | Desenvolvimento de web</title>
      </Head>

      <img
        className="svg"
        src={trianglesBackImg}
        alt="Conjunto de triangulos"
      />
      <img
        className="svgBottom"
        src={trianglesBackImg}
        alt="Conjunto de triangulos"
      />

      <header>
        <img src={logoEjectImg} alt="Logo Eject" />
      </header>

      <Content>
        <div>
          <h1>Bem-vindos ao site da Eject</h1>
          <p>
            Estamos diariamente nos atualizando das novas tecnologias para
            aplicar aos nossos projetos, isso incluí nosso site. Mas isso é por
            enquanto, voltamos em breve!
            <span>Acompanhe nossas redes sociais</span>
          </p>
          <span>
            <Link href="https://www.instagram.com/ejectufrn/">
              <a>
                <img src="/svgs/insta.svg" alt="Acesse o nosso Instagram" />
              </a>
            </Link>
            <Link href="https://www.facebook.com/ejectufrn">
              <a>
                <img src="/svgs/face.svg" alt="Acesse o nosso Facebook" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/company/eject/mycompany/">
              <a>
                <img src="/svgs/linkedin.svg" alt="Acesse o nosso Linkedin" />
              </a>
            </Link>
          </span>
        </div>
        <figure>
          <img
            src="/svgs/awaiting-img.svg"
            alt="Painel com um grupo de pessoas"
          />
        </figure>
      </Content>
      <footer>
        <p>
          Feito com <strong>foco</strong> e <strong>compromisso</strong> pela
          EJECT | 2021
        </p>
      </footer>
    </Template>
  );
}
