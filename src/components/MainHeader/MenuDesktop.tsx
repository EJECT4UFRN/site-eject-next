import Link from "next/link";
import { MenuDesktopContainer, Nav, Dropdown } from "./styles";
import { LinkNext } from "../Link";
import { useEffect, useState } from "react";

interface MenuDesktopProps {
  isDrop: boolean;
  handleDropDown: () => void;
  handleMouseEvents: {
    enter: () => void;
    leave: () => void;
  };
  itemsMenu: {
    MenuItems: {
      title: string;
      url: string;
      dropdown: boolean;
    }[];
    DropdownItems?: {
      title: string;
      url: string;
    }[];
  };
}

export function MenuDesktop({
  isDrop,
  handleDropDown,
  handleMouseEvents,
  itemsMenu,
}: MenuDesktopProps) {
  const { MenuItems, DropdownItems } = itemsMenu;
  const [home, whoWeAre, solution, contents, client] = MenuItems;

  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimation((e) => !e);
    }, 4000);
  }, [animation]);

  return (
    <MenuDesktopContainer>
      <Link href="/">
        <a>
          <img src="/svgs/logo.svg" alt="Logo Eject" />
        </a>
      </Link>

      <Nav>
        <ul>
          <li>
            <LinkNext href={home.url} shouldMatchExactHref={true}>
              <a className="link1">{home.title}</a>
            </LinkNext>
          </li>
          <li>
            <LinkNext href={whoWeAre.url}>
              <a className="link2">{whoWeAre.title}</a>
            </LinkNext>
          </li>
          <li>
            <LinkNext href={solution.url}>
              <a className="link3">{solution.title}</a>
            </LinkNext>
          </li>
          <li>
            <>
              <a className="cursor link4" onClick={handleDropDown}>
                {contents.title}
              </a>

              <Dropdown
                onMouseEnter={handleMouseEvents.enter}
                onMouseLeave={handleMouseEvents.leave}
                isDrop={isDrop}
              >
                {DropdownItems.map(({ title, url }, index) => {
                  return (
                    <li key={index}>
                      <LinkNext href={url} prefetch>
                        <a>{title}</a>
                      </LinkNext>
                    </li>
                  );
                })}
              </Dropdown>
            </>
          </li>
          <li>
            <LinkNext href="/clientes">
              <a className="link5">Clientes</a>
            </LinkNext>
          </li>
        </ul>
      </Nav>
      <Link href="/contato">
        <button className={`${animation ? "animation" : ""}`}>
          Fale com um consultor
        </button>
      </Link>
    </MenuDesktopContainer>
  );
}
