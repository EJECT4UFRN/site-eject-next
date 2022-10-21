import { motion } from 'framer-motion';
import { SectionWhy } from '../../components/SectionWhy';
import { containerAnimate, itemAnimate } from '../../styles/animations';
import {
  Container,
  Material,
  Button,
  Glass,
  Logo,
  Box,
  Modal,
} from '../../styles/templates/Materiais';

export default function LandingPage() {
  return (
    <Container>
      {/* <Modal>
        <span>É só preencher que enviamos </span>
      </Modal> */}
      <motion.main variants={containerAnimate} initial="hidden" animate="show">
        <Logo>
          <img src="/svgs/logo-eject.svg" alt="Logo Eject" />
        </Logo>
        <Material>
          <Box as={motion.div} variants={itemAnimate}>
            <img src="/images/book.png" alt="Logo Eject" />
          </Box>
          <motion.div variants={itemAnimate}>
            <h4>Oi, soubemos que você tem interesse no nosso e-book sobre</h4>
            <h1>posicionamento digital</h1>
          </motion.div>
        </Material>
        <SectionWhy
          title={'PORQUÊ SE INSCREVER?'}
          firstText={'Experiência profissional ainda na faculdade'}
          secondText={
            'Possibilidade de desenvolvimento em várias aréas, incluindo gestão'
          }
          tertiaryText={'Opotunidade de conexões com pessoas e empresas'}
          lastText={
            'Mentoria e treinamento com professores, palestrantes e mais.'
          }
        >
          <Button>BAIXE AGORA MESMO</Button>
        </SectionWhy>
        <Glass>
          <div>
            <img src="/svgs/logo-glass.svg" alt="Logo da Eject transparent" />
          </div>
          <div>
            <p>
              A EJECT é uma empresa júnior que desenvolve soluções digitais para
              transformar pessoas em protagonistas no meio digital.
            </p>
            <span>Conheça mais do nosso trabalho</span>
            <strong>ejectufrn.com.br</strong>
          </div>
        </Glass>
      </motion.main>
      <footer>
        Feito com <strong>foco</strong> e <strong>compromisso</strong> pela
        EJECT
      </footer>
    </Container>
  );
}
