import styled from "styled-components";

export const Card = styled.svg`
  .back1 {
    opacity: 0;
    animation: animateCard 8s ease 5s infinite;
  }
  &:nth-child(2) {
    margin: 0 2rem;
  }
  @keyframes animateCard {
    0% {
      opacity: 0;
    }
    20%,
    50% {
      opacity: 1;
    }
    70%,
    100% {
      opacity: 0;
    }
  }
  @media (max-width: 960px) {
    transform: scale(1.15) translateY(30px);
  }
  @media (max-width: 640px) {
    transform: scale(1);
  }
  @media (max-width: 440px) {
    transform: scale(0.8);
  }
`;
