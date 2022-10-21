import Link from "next/link";
import { MorphingSVG } from "./morphingSVG";
import { Container } from "./styles";
import Router from "next/router";

interface Props {
  id: number;
  titulo: string;
  button: string;
}

interface DiagnosisProps {
  diagnosis: Array<Props>;
}

export function Diagnosis({ diagnosis }: DiagnosisProps) {
  const [content] = diagnosis;

  return (
    <Container>
      <h1>{content.titulo}</h1>

      <button onClick={() => Router.push("/contato")}>{content.button}</button>

      <MorphingSVG />
    </Container>
  );
}
