import React from "react";
import styles from "./ScreenReaderText.module.css";

function ScreenReaderText({ children }) {
  return <span className={styles.hidden}>{children}</span>
}

export default ScreenReaderText;
