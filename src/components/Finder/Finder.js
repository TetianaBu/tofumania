import React from "react";
import styles from "./Finder.module.css";
import Link from "next/link";

function Finder() {
  return (
    <article className={styles.container}>
      <h1>Finder</h1>

      <div>
        <Link href="/finder/database">DataBase </Link>
      </div>
      <div>
        <Link href="/finder/firmness">Firmness </Link>
     
      </div>
    </article>
  );
}

export default Finder;
