"use client";
import React, { useState } from "react";
import Link from "next/link";

import styles from "./Quiz.module.css";
import { QUIZ_DATA } from "../../data";

function Quiz() {
  const [activeIndex, setActiveIndex] = useState(-1);

  function toggleIsActive(index) {
    setActiveIndex(activeIndex === index ? -1 : index);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.initialQuestion}>{QUIZ_DATA.initial.text}</h2>

      {QUIZ_DATA.detailed.map((option, index) => (
        <div className={styles.column} key={index}>
          <p className={styles.cell} onClick={() => toggleIsActive(index)}>
            {console.log(option.text)}
            {option.text}
          </p>
          {activeIndex === index && (
            <div className={styles.subGrid}>
              {option.subQuestions.map((a, i) => (
                <div key={`subQuestion_${i}`} className={styles.column}>
                  <Link
                    href={option.subQuestions[i].action.link}
                    className={styles.cell}
                  >
                    {a.text}{" "}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Quiz;
