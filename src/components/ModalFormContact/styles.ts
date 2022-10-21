import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  background: rgba(0, 61, 115, 0.72);

  position: fixed;
  top: 0;
  left: 0;

  z-index: 988;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 2s ease;
`;

interface ModalStylesProps {
  transformShow: boolean;
}

export const Modal = styled.div<ModalStylesProps>`
  width: 370px;
  height: 250px;

  transform: ${({ transformShow }) =>
    transformShow ? 'translateY(0)' : 'translate(-500px)'};

  border-radius: 15px;
  background: #dff6fe;

  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;

  h2 {
    font-size: 2.8rem;
    color: ${({ theme }) => theme.colors.blue200};
  }

  p {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 30px;
    text-align: center;

    width: 85%;

    color: ${({ theme }) => theme.colors.gray300};

    margin: 1rem;
  }

  > button {
    font-size: 1rem;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.blue200};
    border: 3px solid ${({ theme }) => theme.colors.white};
    box-shadow: 5px 8px 10px rgba(6, 120, 190, 0.31);

    padding: 0.5rem 1.8rem;
    border-radius: 15px;
  }
`;
