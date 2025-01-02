import React from "react";
import styles from "./Education.module.css"; // Make sure to create this CSS file
import education from "../../data/education.json"; // Assuming you will put your education details in a separate JSON file

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.educationList}>
          {education.map((eduItem, id) => (
            <li key={id} className={styles.educationItem}>
              <div className={styles.educationDetails}>
                <h3>{`${eduItem.degree}, ${eduItem.institution}`}</h3>
                <p>{`${eduItem.startDate} - ${eduItem.endDate} | ${eduItem.location}`}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
