// import React from "react";

// import styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils";

// export const Hero = () => {
//   return (
//     <section id="home" className={styles.container}>
//       <div className={styles.content}>
//         <h1 className={styles.title}>Hello! I'm Padmaja</h1>
//         <p className={styles.description}>
//           I am a multi-faceted and diligent indivisual with deep interest in the fiels of software engineering, deep learniing and life sciences.
//         </p>
//         <div className={styles.buttonGroup}>
//         <a
//           href="/Padmaja_Mohanty-Resume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className={styles.resumeBtn}
//         >
//           Resume
//         </a>
      
//         <a href="#contact" className={styles.contactBtn}>
//           Contact Me
//         </a>
// </div>
//       </div>
//       <img
//         src={getImageUrl("hero/heroImage.jpg")}
//         alt="Hero image of me"
//         className={styles.heroImg}
//       />
//       <div className={styles.topBlur} />
//       <div className={styles.bottomBlur} />
//     </section>
//   );
// };


import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello! I'm Padmaja</h1>

        <p className={styles.description}>
          I am a multi-faceted and diligent indivisual with deep interest in the
          fiels of software engineering, deep learniing and life sciences.
        </p>

        <div className={styles.buttonGroup}>
          <a
            href="/Padmaja_Mohanty-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.button} ${styles.resumeBtn}`}
          >
            Resume
          </a>

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
