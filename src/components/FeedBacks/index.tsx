import { Container, Content, Scroll, CardFeedback } from "./styles";
import { ContentMobile } from "./mobile";

import imageSVG from "../../../public/svgs/triangles-feedback.svg";

interface Data {
  id: number;
  comentario: string;
  apelido?: string;
  imagem: string;
  nome: string;
}

interface FeedBacksProps {
  depositions: Data[];
}

function FeedBacks({ depositions }: FeedBacksProps) {
  return (
    <Container>
      <Content>
        <div>
          <h1>O que estão falando do nosso trabalho</h1>
          <button>ver mais</button>
        </div>
        <div>
          {depositions.map((deposition) => (
            <CardFeedback key={deposition.id}>
              <span>
                <img
                  src={deposition.imagem}
                  alt="Profile Josmar Jr"
                />
                <div>
                  <p>{deposition.nome}</p>
                  <span>{deposition?.apelido}</span>
                </div>

              </span>

              <Scroll>
                <p>{deposition.comentario}</p>
              </Scroll>

            </CardFeedback>
          ))}

          {/* <CardFeedback>
            <span>
              <img
                src="https://github.com/josmar-jr.png"
                alt="Profile Josmar Jr"
              />
              <div>
                <p>Gilson Kedson</p>
                <span>eject</span>
              </div>
            </span>
            <p>
              Um briefing bem definido conseguiu ser transformado em uma obra de
              conseguiria pensar igual.
            </p>
          </CardFeedback>
          <CardFeedback>
            <span>
              <img
                src="https://github.com/josmar-jr.png"
                alt="Profile Josmar Jr"
              />
              <div>
                <p>Bryan Sousa</p>
                <span>eject</span>
              </div>
            </span>
            <p>
              Uma equipe super qualificada, que pensam em detalhes que você
              sempre quis mas não sabia que queria.
            </p>
          </CardFeedback> */}
        </div>
      </Content>
      <ContentMobile depositions={depositions} />
    </Container>
  );
}

export default FeedBacks;
