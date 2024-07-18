import React from 'react';
import styles from './ProjectDetail.module.css';

function ProjectDetail({
  mainHeading,
  projectName,
  projectDetail,
  technology,
  linkUsed,
  myStyle,
}) {
  return (
    <>
      <section className={styles.projectDetail}>
        <div className={styles.projectDetail_heading}>
          <h1>{mainHeading}</h1>
        </div>
        <div className={myStyle}>
          <div className={styles.projectDetail_image}>
            <iframe src={linkUsed} title="Laundry Website"></iframe>
          </div>

          <div className={styles.projectDetail_detail}>
            <h3>{projectName}</h3>
            <p>{projectDetail}</p>
            <p>
              <strong>Technologies Used :-</strong> <i>{technology}</i>
            </p>

            <a href={linkUsed} target="_blank">
              Preview
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectDetail;
