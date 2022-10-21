import { Wrapper, Modal } from './styles';

interface ModalFormContactProps {
  showModal: boolean;
  setShowModal: () => any;
}

export function ModalFormContact({ showModal, setShowModal }) {
  return (
    <>
      {showModal && (
        <Wrapper>
          <Modal transformShow={showModal}>
            <h2>Obrigado!</h2>
            <p>
              Em até 48h um de nossos consultores irá entrar em contato com
              você!
            </p>
            <button onClick={setShowModal}>Fechar</button>
          </Modal>
        </Wrapper>
      )}
    </>
  );
}
