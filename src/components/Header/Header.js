"use client";
import React from "react";
import ScreenReaderText from "@/components/ScreenReaderText";
import DrawerMenu from "@/components/DrawerMenu";
import Logo from "@/components/Logo";

import { Menu as IconMenu } from "react-feather";

import styles from "./Header.module.css";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={styles.container}>
      <Logo />

      <div className={styles.menu}>
        <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
          <IconMenu />
          <ScreenReaderText>Close the modal window</ScreenReaderText>
        </button>
        {isOpen && <DrawerMenu />}
      </div>
    </div>
  );
}

export default Header;
