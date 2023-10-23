import React from "react";
import Image from "next/image";

import styles from "./Logo.module.css";
import logoIcon from "../../../public/logo.svg";

function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <Image src={logoIcon} alt="Logo (Image of Tofcio)" />
    </div>
  );
}
export default Logo;
