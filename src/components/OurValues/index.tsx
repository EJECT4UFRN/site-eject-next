import { CardOurValue1, CardOurValue2, CardOurValue3  } from "../CardOurValues";
import { ResponsiveSlideOurValues } from "./responsiveSlide";
import { Container, ValuesCard, Value } from "./styles";


type Values = {
  id: number;
  hover: string;
  imagem: string;
  text: string;
};

type OurValuesProps = {
  ourValues: Values[];
};

export function OurValues({ ourValues }: OurValuesProps) {
  return (
    <Container>
      <h1>Nossos valores</h1>
      <ValuesCard>
        {ourValues.map((value) => (
          <Value
            key={value.id}
            imgBack={{ image: value.imagem, imageHover: value.hover }}
          >
            <h2>{value.text}</h2>
          </Value>
        ))}
      </ValuesCard>
      
      <ResponsiveSlideOurValues />
    </Container>
  );
}
