import Link from "next/link";

import { FormContact } from "../components/FormContact";
import { Maps } from "../components/Maps";

import { MasterSection } from "../styles/templates/Contact";
import { Layout } from "../components/Layout";
import HeroTransform from "../components/HeroTransform";
import { GetStaticProps } from "next";
import api from "../services/api";

interface ContactProps {
  phoneAndEmail: {
    phone: string;
    email: string;
  };
  socialMedias: {
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
  };
}

export default function Contact({ phoneAndEmail, socialMedias }) {
  return (
    <Layout>
      <HeroTransform />
      <MasterSection>
        <p>
          Trabalhamos pensando na satisfação dos nossos clientes e entregamos os
          melhores serviços para garantir resultados capazes de fazer o seu
          negócio decolar! Não perca essa oportunidade e fale agora com um dos
          nossos consultores!
        </p>
        <h2>É fácil de nos encontrar!</h2>
        <main>
          <Maps />
          <FormContact />
        </main>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <span>{phoneAndEmail.phone}</span>
          <span>{phoneAndEmail.email}</span>
          <span style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', gap:'1rem'}}>
            <Link href={socialMedias.instagram}>
              <a>
                <img src="/svgs/insta-blue.svg" alt="Logo instagram" />
              </a>
            </Link>

            <Link href={socialMedias.facebook}>
              <a  style={{margin:'0'}}>
                <img src="/svgs/face-blue.svg" alt="Logo Facebook" />
              </a>
            </Link>

            <Link href={socialMedias.linkedin}>
              <a>
                <img src="/svgs/linkedin-blue.svg" alt="Logo linkedin" />
              </a>
            </Link>

            <Link href={socialMedias.youtube}>
              <a>
                <img src="/svgs/youtube_azul.svg" alt="Logo youtube" style={{fill:'#003D73'}}/>
              </a>
            </Link>
          </span>
        </div>
      </MasterSection>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: [informations],
  } = await api.get("estatico");

  return {
    props: {
      phoneAndEmail: {
        phone: informations.footer[0].celular,
        email: informations.footer[0].email,
      },
      socialMedias: informations.redes_sociais[0],
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
