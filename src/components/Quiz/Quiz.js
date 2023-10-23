"use client";
import React, { useState } from "react";

import InitialQuestion from "./InitialQuestion";

import styles from "./Quiz.module.css";
import { QUIZ_DATA } from "../../data";

const [initialQuestion, general, detailed] = [QUIZ_DATA.initial, QUIZ_DATA.general, QUIZ_DATA.detailed]


function Quiz() {
  const [activeStates, setActiveStates] = useState([false, false]);

  function toggleIsActive(index) {
    const newActiveStates = [...activeStates];
    newActiveStates[index] = !newActiveStates[index];
    setActiveStates(newActiveStates);
  }

  return (
    <div className={styles.container}>
      <InitialQuestion>{initialQuestion.text}</InitialQuestion>
      <div className={styles.column}>
        <p className={styles.cell} onClick={() => toggleIsActive(0)}>
          {general.text}
        </p>

        {general.action && activeStates[0] && (
          <p className={`${styles.cell}`}>{general.action.message}</p>
        )}
      </div>
      <div className={styles.column}>
        <p className={styles.cell}>{detailed.text}</p>
        <div className={styles.subGrid}>
          {detailed.subQuestions.map((q, i) => (
            <div key={`subQuestion_${i}`} className={styles.column}>
              <p
                className={styles.cell}
                onClick={() => toggleIsActive(`subQuestion_${i}`)}
              >
                {q.text}
              </p>
              {q.action && activeStates[`subQuestion_${i}`] && (
                <p className={styles.cell}>{q.action.message}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
