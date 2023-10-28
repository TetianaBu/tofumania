"use client";
import React, { Fragment, useState } from "react";
import { FIRMNESSLEVELS } from "../../constants";
import styles from "./TofuTypes.module.css";
import DetailsModal from "./DetailsModal";

function TofuTypes() {
  const [isModalOpenArray, setIsModalOpenArray] = useState(
    FIRMNESSLEVELS.map(() => false)
  );

  const toggleModal = (index) => {
    const newModalOpenArray = [...isModalOpenArray];
    newModalOpenArray[index] = !newModalOpenArray[index];
    setIsModalOpenArray(newModalOpenArray);
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Options</h2>
        <ul className={styles.list}>
          {FIRMNESSLEVELS.map((item, index) => (
            <Fragment key={index}>
              <li className={styles.listItem}>
                <button
                  className={styles.OpenModalBtn}
                  onClick={() => toggleModal(index)}
                >
                  {item.type}
                </button>
              </li>
              {isModalOpenArray[index] && (
                <DetailsModal
                  firmnessLevel={item}
                  handleDismiss={() => toggleModal(index)}
                />
              )}
            </Fragment>
          ))}
        </ul>
      </div>
    </>
  );
}
export default TofuTypes;
