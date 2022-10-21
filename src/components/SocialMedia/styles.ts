import styled from 'styled-components';

export const Container = styled.span`
  width: 40px;
  z-index: 999;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 8px rgba(6, 120, 190, 0.31);

  border-radius: 10px 0px 0px 10px;

  position: fixed;
  top: 450px;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  
`;
/*
{ @media (max-width: 580px) {
    display: none;
*/