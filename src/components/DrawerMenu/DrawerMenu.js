import React from "react";
import Link from "next/link";
import styles from "./DrawerMenu.module.css";

function DrawerMenu() {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <Link href="/">Main </Link>
        </li>
        <li>
          <Link href="/finder">Finder </Link>
          <ul>
            <li>
              <Link href="/finder/database">DataBase</Link>
            </li>
            <li>
              <Link href="/finder/firmness">Firmness </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
          <ul>
            <li>
              <Link href="/blog/learn">Learn </Link>
            </li>
            <li>
              <Link href="/blog/inspo">Inspo </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact">Contact </Link>
        </li>
      </ul>
    </nav>
  );
}

export default DrawerMenu;
