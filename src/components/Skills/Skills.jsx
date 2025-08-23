import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";

export const Skills = () => {
  // Group skills by category for better organization
  const skillCategories = {
    "Core Skills": ["ML", "Deep Learning", "NLP", "Algorithms", "Data Structures", "Frontend", "Backend", "Distributed Systems"],
    "Languages & Libraries": ["React", "NextJS", "TypeScript", "Java", "Python", "PyTorch", "NumPy", "Matplotlib", "Seaborn", "Pandas", "C++", "C"],
    "Cloud & Databases": ["Google Cloud", "AWS", "Serverless", "MongoDB", "Firebase", "PostgreSQL", "MySQL", "Docker"]
  };

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>TECHNICAL SKILLS</h2>
      <p className={styles.subtitle}>Technologies I work with to bring ideas to life</p>
      
      <div className={styles.content}>
        {Object.entries(skillCategories).map(([category, categorySkills]) => (
          <div key={category} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <div className={styles.skills}>
              {categorySkills.map((skillName) => {
                const skill = skills.find(s => s.title === skillName);
                return skill ? (
                  <div key={skill.title} className={styles.skill}>
                    <span className={styles.skillText}>{skill.title}</span>
                  </div>
                ) : (
                  <div key={skillName} className={styles.skill}>
                    <span className={styles.skillText}>{skillName}</span>
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
