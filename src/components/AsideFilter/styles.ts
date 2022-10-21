import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100%;
  border-right: 2px solid #cde5f7;
  padding: 3rem 1rem 0 0.5rem;

  @media (max-width: 960px) {
    border: none;
    padding: 1.2rem 0 0 0;
  }
`;
export const ListTips = styled.ul`
  font-weight: 600;
  font-size: 1.1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;

  @media (max-width: 960px) {
    flex-direction: row;
  }

  li {
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
      opacity: 0.75;
    }
  }
`;
