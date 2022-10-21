import { MenuItems } from './itemsMenu';
import { DropdownItems } from '../MainHeader/itemsMenu';

import { useState } from 'react';
import { MenuDesktop } from './MenuDesktop';
import { MenuMobile } from './MenuMobile';

export function MainHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDrop, setIsDrop] = useState<boolean>(false);

  function handleDropDown() {
    setIsDrop((c) => !c);
  }

  const handleMouseEvents = {
    enter() {
      setIsDrop((c) => !!c);
    },
    leave() {
      setIsDrop((c) => !c);
    },
  };

  return (
    <>
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />

      <MenuDesktop
        isDrop={isDrop}
        handleDropDown={handleDropDown}
        handleMouseEvents={handleMouseEvents}
        itemsMenu={{ MenuItems, DropdownItems }}
      />
    </>
  );
}
