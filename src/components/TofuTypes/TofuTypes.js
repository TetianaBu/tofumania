"use client";
import React from "react";
import { FIRMNESSLEVELS } from "../../constants";
import styles from "./TofuTypes.module.css";
import DetailsModal from "./DetailsModal";
import useToggle from "./use-toggle";

function TofuTypes() {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Options</h2>
        <ul className={styles.list}>
          {FIRMNESSLEVELS.map((item, index) => (
            <>
              <li
                className={styles.listItem}
                key={index}
                onClick={toggleIsModalOpen}
              >
                <button className={styles.OpenModalBtn}>{item.type}</button>
              </li>
              {isModalOpen && (
                <DetailsModal
                  firmnessLevel={item}
                  handleDismiss={toggleIsModalOpen}
                />
              )}
            </>
          ))}
        </ul>
      </div>
    </>
  );
}
export default TofuTypes;
