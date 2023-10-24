"use client";
import React from "react";
import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import styles from "./DetailsModal.module.css";
import ScreenReaderText from "@/components/ScreenReaderText";

function DetailsModal({ firmnessLevel, handleDismiss }) {
  const { characteristics, usage, type } = firmnessLevel;

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        handleDismiss();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleDismiss]);

  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className={styles.container}>
          <div className={styles.backdrop} onClick={handleDismiss} />
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label={type}
          >
            <button className={styles.closeButton} onClick={handleDismiss}>
              <Close />
              <ScreenReaderText>Close the modal window</ScreenReaderText>
            </button>
            <p>
              <span className={styles.common}>type:</span>{" "}
              <span>{type.toUpperCase()}</span>
            </p>
            <p>
              <span className={styles.common}>characteristics:</span>{" "}
              <span>{characteristics}</span>
            </p>
            <p>
              <span className={styles.common}>best to use for:</span>{" "}
              <span>{usage}</span>
            </p>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}
export default DetailsModal;
