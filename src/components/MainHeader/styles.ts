import styled from 'styled-components';

interface DropdownProps {
  isDrop?: boolean;
  active?: boolean;
}

export const MenuDesktopContainer = styled.header`
  width: 100%;
  height: 98px;

  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 4px 10px 5px #e0e5f1;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 999;

  > button {
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.white};
    background: linear-gradient(92.07deg, #0995db 1.84%, #11a7f1 100%);
    filter: drop-shadow(0px 4px 4px rgba(9, 149, 219, 0.35));

    padding: 0.8rem 1.2rem;
    border-radius: 10px;
    transition: 0.3s ease;
    font-family: 'Exo 2';

    &.animation {
      animation: trembles 0.3s ease-in-out 0s 4 alternate;

      @keyframes trembles {
        0% {
          transform: rotate(2deg);
        }
        25% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(-2deg);
        }
        75% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    }

    &:hover {
      transform: scale(1.02);
      filter: drop-shadow(0px 4px 4px rgba(9, 149, 219, 0.9));
      opacity: 0.9;
    }
  }

  @media (max-width: 960px) {
    display: none;
  }
`;

export const Nav = styled.nav<DropdownProps>`
  > ul {
    color: ${({ theme }) => theme.colors.gray300};

    display: flex;
    align-items: center;
    > li {
      font-weight: 600;
      font-size: 1rem;
      list-style: none;
      text-transform: uppercase;

      position: relative;
      transition: 0.3s ease;

      &:nth-child(4) {
        &:after {
          content: '';
          position: absolute;
          top: 26%;
          right: -6px;

          transform: rotate(45deg);

          border-radius: 1px;

          transition: 0.3s ease;

          width: 5px;
          height: 5px;
          border-bottom: 2.5px solid ${({ theme }) => theme.colors.gray300};
          border-right: 2.5px solid ${({ theme }) => theme.colors.gray300};
          border-radius: 2px;
        }
        &:hover {
          opacity: 1;
          &:after {
            border-bottom: 2.5px solid ${({ theme }) => theme.colors.blue200};
            border-right: 2.5px solid ${({ theme }) => theme.colors.blue200};
          }
        }
        .dropdown-link {
          &:hover {
            transition: 0.3s ease;
            opacity: 0.8;
          }
        }
      }
      &:nth-child(5) {
        margin-left: 1.2rem;
      }
      &:hover {
        opacity: 0.8;
        &:after {
          top: 36%;
        }
      }

      a {
        color: ${({ theme }) => theme.colors.gray300};

        padding: 0.3rem 0.5rem;
        margin-left: 0.5rem;

        transition: 0.4s ease;

        position: relative;
        border-bottom: 4px solid transparent;
        position: relative;

        &:before {
          content: '';
          width: 0;
          height: 3px;
          top: 92%;
          left: 0;
          display: block;
          position: absolute;

          transition: 0.6s ease;
          transform: translate(12%, 0);
        }

        &:hover {
          color: ${({ theme }) => theme.colors.blue200};

          &:before {
            content: '';
            width: 80%;
            height: 3px;
            background: ${({ theme }) => theme.colors.blue200};
            border-radius: 20px;
          }
        }
      }
      .selected {
        color: ${({ theme }) => theme.colors.blue200};
        &:before {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 12px;
          width: 60%;
          height: 3px;
          background: ${({ theme }) => theme.colors.blue200};
          border-radius: 20px;
          transform: translate(0%, 0%);
        }
        &:hover {
          &:before {
            width: 60%;
          }
        }
      }

      .link1 {
        &:before {
          left: 12px;
        }
      }
      .link2 {
        &:before {
          left: 24px;
        }
      }
      .link3 {
        &:before {
          left: 16px;
        }
      }
      .link4 {
        &:before {
          left: 1px;
        }
      }
      .link5 {
        &:before {
          left: 18px;
        }
      }
    }
  }
  .cursor {
    cursor: pointer;
  }
`;

export const Dropdown = styled.ul<DropdownProps>`
  background: ${({ theme }) => theme.colors.primary};
  visibility: ${({ isDrop }) => (isDrop ? 'visible' : 'hidden')};
  transform: ${({ isDrop }) =>
    isDrop ? 'translateY(-12px)' : 'translateY(-200px)'};
  opacity: ${({ isDrop }) => (isDrop ? '1' : '0')};
  transition: opacity 0.3s ease;

  position: absolute;
  top: 72px;
  left: -16px;

  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 4px 10px #dff6fe;
  z-index: 9;

  li {
    font-weight: 600;
    font-size: 1rem;
    list-style: none;
    text-transform: uppercase;
    list-style: none;
    white-space: nowrap;

    padding: 1rem 1rem;

    transition: 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const MenuMobileContainer = styled.header`
  width: 100%;
  height: 70px;

  display: none;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 4px 10px 5px #e0e5f1;

  position: fixed;
  top: 0;
  left: 0;

  padding: 1.2rem;

  justify-content: space-between;
  align-items: center;
  z-index: 777 !important;

  > div {
    width: 110px;
    height: 40px;

    img {
      width: 100%;
    }
  }

  @media (max-width: 960px) {
    display: flex;
  }
`;

interface NavDropProps {
  isOpen: boolean;
}
export const NavDrop = styled.nav<NavDropProps>`
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(40px)' : 'translateY(-400px)'};
  transition: 0.3s ease;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 4px 10px 5px #e0e5f1;

  position: fixed;
  top: 32px;
  left: 0;
  z-index: 555;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > ul {
    width: 100%;
    li {
      a {
        color: ${({ theme }) => theme.colors.gray300};
      }
      text-transform: uppercase;
      border-bottom: 1px solid #e0e5f1;

      text-align: center;
      padding: 1rem 0.5rem;
    }
  }
  @media (min-width: 960px) {
    display: none;
  }
`;
