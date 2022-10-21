import Head from 'next/head';
import Link from 'next/link';

import { Template, Main } from '../styles/templates/404';

export default function Page404() {
  return (
    <Template>
      <Head>
        <title>EJECT | Desenvolvimento de web</title>
      </Head>

      <img className="backErro404" src="/svgs/404.svg" />
      <img className="svgTop" src="/svgs/triangles-await.svg" />
      <img className="svgBottom" src="/svgs/triangles-await.svg" />
      <header>
        <Link href="/">
          <a>
            <img src="/svgs/logo-eject.svg" alt="Logo Eject" />
          </a>
        </Link>

        <span>
          <a href="https://www.instagram.com/ejectufrn/">
            <img src="/svgs/insta.svg" alt="Logo Instagram" />
          </a>
          <a href="https://www.facebook.com/ejectufrn">
            <img src="/svgs/face.svg" alt="Logo Facebook" />
          </a>
          <a href="https://www.linkedin.com/company/eject/mycompany/">
            <img src="/svgs/linkedin.svg" alt="Logo Linkedin" />
          </a>
        </span>
      </header>
      <Main>
        <div>
          <img src="/svgs/alert404.svg" alt="Erro 404, página não encontrada" />
        </div>
        <div>
          <h1>
            <strong>Opa!</strong>
          </h1>
          <p>
            Parece que alguma coisa deu
            <br /> errado e nós não conseguimos
            <br /> encontrar a página.
          </p>

          <Link href="/">
            <button>Retorna à home</button>
          </Link>
        </div>
      </Main>
    </Template>
  );
}
