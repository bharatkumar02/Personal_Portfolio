import React from 'react';
import styles from './MyProject.module.css';
import { useInView } from 'react-intersection-observer';


function MyProject({
  projectDetail,
  mainHeading,
  myStyle,
  projecrDetail_image,
  linkUsed,
  projectName,
  technology,
  gitLink,
}) {
  const { ref: section1Ref, inView: section1InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    
    <>
      <section className={`${styles.projectDetail} ${section1InView ? `${styles.inview}` : ``}`} ref={section1Ref}>
        <div className={myStyle}>
          <div className={styles.projectDetail_image}>
            <iframe src={linkUsed} title="Laundry Website" loading='lazy'></iframe>
          </div>

          <div className={styles.projectDetail_detail}>
            <h3>{projectName}</h3>
            <p>{projectDetail}</p>
            <p>
              <strong>Technologies Used :-</strong> <i>{technology}</i>
            </p>
            <div className={styles.projectDetail_Button}>
              <a href={linkUsed} target="_blank">
                Preview
              </a>
              <a href={gitLink} target="_blank">
                View Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyProject;
