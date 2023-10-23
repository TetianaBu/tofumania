import React from "react";

import styles from "./InitialQuestion.module.css";

function InitialQuestion({ children }) {
  return <div className={styles.cell} >{children}</div>;
}

export default InitialQuestion;
