import styles from './page.module.css';
import Link from 'next/link';

export const metadata = { title: 'Resume | Jhareld Manalo' };

export default function ResumePage() {
  return (
    <div className="container">
      <div className="page-header">
        <p className="label">Resume</p>
        <h1>Curriculum Vitae</h1>
        <p>My professional summary, experience, and qualifications.</p>
      </div>

      <div className={styles.resumeActions}>
        <a href="#" className="btn btn-primary">Download PDF</a>
        <Link href="/contact" className="btn btn-outline">Get In Touch</Link>
      </div>

      <div className={styles.resumeDoc}>

        {/* Header */}
        <div className={styles.docHeader}>
          <div>
            <h2 className={styles.docName}>Jhareld Manalo</h2>
            <p className={styles.docTitle}>Computer Science Student | Aspiring Game Developer</p>
          </div>
          <div className={styles.docContact}>
            <span>jhareldmanalo006@gmail.com</span>
            <span>San Pablo, Laguna</span>
            <span>github.com/jhareld-dotcom</span>
            <span>linkedin.com/in/jhareldmanalo</span>
          </div>
        </div>

        <ResumeSection title="Summary">
          <p className={styles.summary}>
           Second-year Bachelor of Science in Information Technology student at Pamantasan ng Lungsod ng San Pablo with a strong interest in web development, software development, and game development. Experienced in building academic projects using C#, HTML, CSS, JavaScript, PHP, and MySQL. A motivated and hardworking individual who continuously seeks opportunities to learn new technologies, improve technical skills, and gain real-world experience while pursuing a career in the technology industry.
          </p>
        </ResumeSection>

      

        <ResumeSection title="Experience">
          <ResumeEntry
            title="Video Editor (Local)"
            sub="Self-Employed"
            date="2024"
            items={[
                  'Edited short-form and promotional videos for local clients',
                  'Worked with client requirements and revisions to achieve desired results',
                  'Improved skills in creativity, attention to detail, and content presentation',
            ]}
          />
        </ResumeSection>

        <ResumeSection title="Technical Skills">
          <div className={styles.skillsGrid}>
            {[
              { label: 'Languages',  value: 'JavaScript, TypeScript, C#, C++ ,SQL, HTML/CSS' },
              { label: 'Databases',  value: 'MySql' },
              { label: 'Tools',      value: 'Github, Xampp, Figma, VScode' },
            ].map(({ label, value }) => (
              <div key={label} className={styles.skillRow}>
                <span className={styles.skillLabel}>{label}</span>
                <span className={styles.skillValue}>{value}</span>
              </div>
            ))}
          </div>
        </ResumeSection>

       

      </div>
    </div>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}

function ResumeEntry({ title, sub, date, items }: { title: string; sub: string; date: string; items: string[] }) {
  return (
    <div className={styles.entry}>
      <div className={styles.entryHead}>
        <div>
          <h4 className={styles.entryTitle}>{title}</h4>
          <p className={styles.entrySub}>{sub}</p>
        </div>
        <span className={styles.entryDate}>{date}</span>
      </div>
      <ul className={styles.entryItems}>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
