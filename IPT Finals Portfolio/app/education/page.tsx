import styles from './page.module.css';

export const metadata = { title: 'Education | Jhareld Manalo' };

const education = [
  {
    degree: 'College (BSIT - Major in Web & Game Development)',
    institution: 'Pamantasan ng Lungsod ng San Pablo',
    period: '2024 - Present',
    
    status: 'Current',
   

  },
  {
    degree: 'Senior High School (Hummanities and Social Sciences)',
    institution: 'Crecencia Drucila Lopez Senior High School',
    period: '2022 - 2024 (Expected)',
    status: 'Graduated',
   
  },
  {
    degree: 'High School',
    institution: 'Col. Lauro D. Dizon Integrated High School',
    period: '2018 - 2022',
    status: 'Graduated',
    
  },
];



export default function EducationPage() {
  return (
    <div className="container">
      <div className="page-header">
        <p className="label">Education</p>
        <h1>Academic Background</h1>
        <p>My formal education and certifications that have shaped my technical foundation.</p>
      </div>

      <section>
        <h2 className={styles.h2}>Degrees</h2>
        <div className={styles.timeline}>
          {education.map((edu) => (
            <div key={edu.degree} className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <div className={styles.timelineHead}>
                  <div>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <p className={styles.institution}>{edu.institution}</p>
                  </div>
                  <div className={styles.timelineRight}>
                    <span className={`tag ${edu.status === 'Current' ? 'accent' : ''}`}>{edu.status}</span>
                    <span className={styles.period}>{edu.period}</span>
                   
                  </div>
                </div>
               
                
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      
    </div>
  );
}
