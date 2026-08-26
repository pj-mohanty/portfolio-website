import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello! I'm Padmaja</h1>

        <p className={styles.description}>
        I am an MS Computer Science student with experience in software engineering
        and AI research, building reliable applications and investigating how
        intelligent systems learn and behave.
        </p>

        <div className={styles.buttonGroup}>
          <a
            href="#contact"
            className={`${styles.button} ${styles.contactBtn}`}
          >
            Contact Me
          </a>
        </div>
      </div>

      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
