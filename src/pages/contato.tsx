import Link from "next/link";

import { FormContact } from "../components/FormContact";
import { Maps } from "../components/Maps";

import { MasterSection } from "../styles/templates/Contact";
import { Layout } from "../components/Layout";
import HeroTransform from "../components/HeroTransform";
import { GetStaticProps } from "next";
import api from "../services/api";

interface ContactProps {
  phoneAndEmailAndEndereco: {
    phone: string;
    email: string;
    endereco: string;
  };
  socialMedias: {
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
  };
}

export default function Contact({ phoneAndEmailAndEndereco, socialMedias }) {
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
          <Maps location={phoneAndEmailAndEndereco.endereco}  avenue={phoneAndEmailAndEndereco.avenida} cep={phoneAndEmailAndEndereco.cep}/>
          <FormContact />
        </main>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <span>{phoneAndEmailAndEndereco.phone}</span>
          <span>{phoneAndEmailAndEndereco.email}</span>
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
      phoneAndEmailAndEndereco: {
        phone: informations.footer[0].celular,
        email: informations.footer[0].email,
        endereco: informations.footer[0].localizacao, 
        avenida: informations.footer[0].avenida, 
        cep: informations.footer[0].cep, 
      },
      socialMedias: informations.redes_sociais[0],
    },
    revalidate: 60 * 5,
  };
};
