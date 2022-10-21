import CountUp from 'react-countup';

import { Container, Accountant } from './styles';

interface Data {
  id: number;
  titulo: string;
  contagem: number;
}

interface AccountantsProps {
  count: Array<Data>;
}

export function Accountants({ count }: AccountantsProps) {
  return (
    <Container>
      {count.map((account) => {
        return (
          <Accountant key={account.id}>
            <h2>
              <CountUp
                end={account.contagem}
                prefix={'+ '}
                separator="."
                preserveValue={true}
                duration={2}
                delay={1}
              />
            </h2>
            <p>{account.titulo}</p>
          </Accountant>
        );
      })}
    </Container>
  );
}
