import React from "react";
import styles from "./SearchResult.module.css";


function SearchResult({ result }) {
  return (
    <article className={styles.container}>
      <div>
        <h3>{result.title.toUpperCase()}</h3>
        <p>Producer: {result.producer}</p>
        <p>Level of firmness: {result.hardness}</p>
      </div>
    </article>
  );
}

export default SearchResult;
