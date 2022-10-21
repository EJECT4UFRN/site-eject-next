import { ReactNode } from "react";

import { Container } from "./styles";

interface SectionWhyProps {
  title: string;
  firstText: string;
  secondText: string;
  tertiaryText: string;
  lastText: string;
  children?: ReactNode;
}

export function SectionWhy({
  children,
  title,
  firstText,
  secondText,
  tertiaryText,
  lastText,
}: SectionWhyProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        <span>
          <div>
            <img src="/svgs/icon-ps1.svg" alt="Icone de certificado" />
          </div>
          <p>{firstText}</p>
        </span>
        <span>
          <div>
            <img src="/svgs/icon-ps2.svg" alt="Icone de estrela" />
          </div>
          <p>{secondText}</p>
        </span>
      </div>
      <div>
        <span>
          <div>
            <img src="/svgs/icon-ps3.svg" alt="Icone de compartilhamento" />
          </div>

          <p>{tertiaryText}</p>
        </span>
        <span>
          <div>
            <img src="/svgs/icon-ps4.svg" alt="Icone de livro" />
          </div>
          <p>{lastText}</p>
        </span>
      </div>
      {children}
    </Container>
  );
}
