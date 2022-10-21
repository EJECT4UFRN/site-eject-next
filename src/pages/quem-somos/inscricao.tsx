import { GetServerSideProps } from "next";
import Head from "next/head";
import { FormPS } from "../../components/FormPS";
import api from "../../services/api";
import { Container, FinishedSubscribe } from "../../styles/templates/Inscricao";
import { isBefore, getDay } from "date-fns";

type SubscribeProps = {
  countDate: Date;
  countDateInit: Date;
};

export default function Subscribe({ countDate, countDateInit }: SubscribeProps) {
  const dateInit = new Date(countDateInit);
  const countNow = new Date();
  const now = new Date().getTime();
  const dateFinish = new Date(countDate).getTime();

  return (
    <Container>
      <Head>
        <title>EJECT | Desenvolvimento de web</title>
      </Head>
      {dateFinish > now && isBefore(dateInit, countNow) ? (
        <FormPS />
      ) : (
        <FinishedSubscribe>
          <h1>Periodo de inscrições finalizado!</h1>
          <img src="/images/foca.png" />
        </FinishedSubscribe>
      )}
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get(`prosempre-page
  `);
  const [getDate] = data;

  return {
    props: {
      countDate: getDate.countDate,
      countDateInit: getDate.countDateInicio,
    },
  };
};
