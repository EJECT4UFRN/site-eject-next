import Head from "next/head";

import { MainHeader } from "../MainHeader";
import { Footer } from "../Footer";
import { SocialMedias } from "../SocialMedia";

import { Container } from "./styles";
import { ReactNode, useEffect, useState } from "react";
import api from "../../services/api";

interface LayoutProps {
  children: ReactNode;
}

interface StaticDataReturn {
  footer?: {
    celular: string;
    email: string;
    localizacao: string;
  }[];
  redes_sociais?: {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  }[];
}

export const Layout = ({ children }: LayoutProps) => {
  const [footerAndNetWork, setFooterAndNetWork] = useState<StaticDataReturn>({
    footer: [
      {
        celular: "+55 (84) 99226-4221",
        email: "contato@ejectufrn.com.br",
        localizacao:
          "inPACTA - R. Monte Sinai, 1828a - Capim Macio, Natal - RN, 59078-360",
      },
    ],
    redes_sociais: [
      {
        facebook: "https://www.facebook.com/ejectufrn",
        instagram: "https://www.instagram.com/ejectufrn/",
        linkedin: "https://www.linkedin.com/company/eject/mycompany/",
        youtube:  "https://www.youtube.com/channel/UC1QFHX0jntx0hI7oStfW4OQ"
      },
    ],
  });

  async function getDataFooter() {
    const {
      data: [informations],
    } = await api.get<StaticDataReturn[]>("estatico");

    setFooterAndNetWork(informations);
  }

  useEffect(() => {
    getDataFooter();
  }, []);

  return (
    <Container>
      <Head>
        <title>EJECT | Desenvolvimento de web</title>
      </Head>
      <MainHeader />
      <main>{children}</main>
      <SocialMedias socialMedias={footerAndNetWork.redes_sociais} />
      <Footer
        footerInformations={footerAndNetWork?.footer}
        socialMedias={footerAndNetWork?.redes_sociais}
      />
    </Container>
  );
};
