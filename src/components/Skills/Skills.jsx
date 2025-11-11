import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";

export const Skills = () => {
  const skillCategories = {
    "AI & Machine Learning": [
      "TensorFlow",
      "Keras",
      "PyTorch",
      "scikit-learn",
      "OpenCV",
      "LangChain",
      "DeepSeek",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn"
    ],
    "Software Engineering": [
      "Java",
      "Spring Boot",
      "Python",
      "C++",
      "C",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "TypeScript"
    ],
    "Cloud & Databases": [
      "Google Cloud",
      "AWS",
      "Firebase",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Docker"
    ],
    "Tools & Platforms": [
      "Streamlit",
      "Jupyter Notebook",
      "GraphQL",
      "HTML",
      "CSS",
      "Figma",
      "Git"
    ]
  };

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>TECHNICAL SKILLS</h2>

      <div className={styles.content}>
        {Object.entries(skillCategories).map(([category, categorySkills]) => (
          <div key={category} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <div className={styles.skills}>
              {categorySkills.map((skillName) => {
                const skill = skills.find((s) => s.title === skillName);
                return (
                  <div key={skillName} className={styles.skill}>
                    <span className={styles.skillText}>
                      {skill ? skill.title : skillName}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
