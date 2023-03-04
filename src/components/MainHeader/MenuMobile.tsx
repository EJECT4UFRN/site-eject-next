import Link from "next/link";
import { MenuToggle } from "./ButtonToggle";
import { MenuMobileContainer, NavDrop } from "./styles";

export function MenuMobile({ isOpen, setIsOpen }) {
  return (
    <div>
      <MenuMobileContainer>
        <div>
          <img src="/svgs/logo.svg" alt="Logo Eject" />
        </div>
        <span>
          <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </span>
      </MenuMobileContainer>
      <NavDrop isOpen={isOpen}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/quem-somos">
              <a>Quem Somos</a>
            </Link>
          </li>
          <li>
            <Link href="/solucao">
              <a>Soluções</a>
            </Link>
          </li>
          <li>
            <Link href="/conteudos/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/clientes">
              <a>Clientes</a>
            </Link>
          </li>
          <li>
            <Link href="/contato">
              <a>Contatos</a>
            </Link>
          </li>
        </ul>
      </NavDrop>
    </div>
  );
}
