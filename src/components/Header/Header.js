"use client";
import React from "react";
import ScreenReaderText from "@/components/ScreenReaderText";
import DrawerMenu from "@/components/DrawerMenu";
import Logo from "@/components/Logo";
import useToggle from "../../lib/use-toggle";

import { Menu as IconMenu } from "react-feather";

import styles from "./Header.module.css";

function Header() {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  return (
    <div className={styles.container}>
      <Logo />

      <nav className={styles.menu} role="navigation" aria-label="Main menu">
        <button
          aria-expanded={isMenuOpen}
          className={styles.menuButton}
          onClick={() => toggleIsMenuOpen(!isMenuOpen)}
        >
          <IconMenu aria-hidden="true" focusable="false" />
          <ScreenReaderText>Open menu</ScreenReaderText>
        </button>
        {isMenuOpen && <DrawerMenu handleDismiss={toggleIsMenuOpen} />}
      </nav>
    </div>
  );
}

export default Header;
