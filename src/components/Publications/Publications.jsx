import React from 'react';
import publicationsData from '../../data/publications.json';
import styles from './Publications.module.css';

const Publications = () => {
  return (
    <section id="publications" className={styles.publications}>
      <div className={styles.container}>
        <h2 className={styles.title}>Research Publications</h2>
        <div className={styles.publicationsGrid}>
          {publicationsData.map((publication, index) => (
            <div key={index} className={styles.publicationCard}>
              <div className={styles.publicationHeader}>
                <h3 className={styles.publicationTitle}>{publication.title}</h3>
                <span className={styles.publicationType}>{publication.type}</span>
              </div>
              <div className={styles.publicationDetails}>
                <p className={styles.conference}>{publication.conference}</p>
                <p className={styles.year}>{publication.year}</p>
                {publication.authors && (
                  <p className={styles.authors}>Authors: {publication.authors}</p>
                )}
                {publication.publisher && (
                  <p className={styles.publisher}>Publisher: {publication.publisher}</p>
                )}
              </div>
              <p className={styles.description}>{publication.description}</p>
              {publication.doi && (
                <a 
                  href={publication.doi} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.doi}
                >
                  View Publication
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
