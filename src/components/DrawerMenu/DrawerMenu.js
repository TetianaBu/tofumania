import React from "react";
import Link from "next/link";
import { X as Close } from "react-feather";
import styles from "./DrawerMenu.module.css";
import ScreenReaderText from "../ScreenReaderText";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import useEscapeKey from "../../lib/use-escape-key";

useEscapeKey;
function DrawerMenu({ handleDismiss }) {
  useEscapeKey(handleDismiss);

  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className={styles.container}>
          <div className={styles.backdrop} onClick={handleDismiss} />
          <div className={styles.navContainer}>
            <button className={styles.closeButton} onClick={handleDismiss}>
              <Close aria-hidden="true" focusable="false" />
              <ScreenReaderText>Close menu</ScreenReaderText>
            </button>
            <div className={styles.navigation}>
              <ul>
                <li onClick={handleDismiss}>
                  <Link href="/">Main</Link>
                </li>
                <li>
                  <div onClick={handleDismiss}>
                    <Link href="/finder">Finder</Link>
                  </div>
                  <ul onClick={handleDismiss}>
                    <li>
                      <Link href="/finder/database">DataBase</Link>
                    </li>
                    <li>
                      <Link href="/finder/firmness">Firmness</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div onClick={handleDismiss}>
                    <Link href="/blog">Blog</Link>
                  </div>
                  <ul onClick={handleDismiss}>
                    <li>
                      <Link href="/blog/learn">Learn</Link>
                    </li>
                    <li>
                      <Link href="/blog/inspo">Inspo</Link>
                    </li>
                  </ul>
                </li>
                <li onClick={handleDismiss}>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default DrawerMenu;
