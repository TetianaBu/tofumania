import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Logo.module.css";
import logoIcon from "../../../public/logo-full.svg";

function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <Link href="/">
        <Image src={logoIcon} alt="Logo (Image of Tofcio)" />
      </Link>
    </div>
  );
}
export default Logo;
