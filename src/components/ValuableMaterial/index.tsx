import Image from 'next/image';
import { Container, Book, Content } from './styles';

function ValuableMaterial() {
  return (
    <Container>
      <div>
        <Book>
          <img src="/images/book.png" />
        </Book>
        <Content>
          <h1>
            Quer saber como fazer sua marca se destacar entre tantas outras?
          </h1>
          <button>quero baixar</button>
        </Content>
      </div>
    </Container>
  );
}

export default ValuableMaterial;
