import styles from './page.module.css';

export const metadata = { title: 'Achievements | Manalo, Jhareld' };

const awards = [
  { title: 'Chess Intrams', org: 'Crecencia Drucila Lopez SHS', year: '2024', desc: '3rd Place.' },
  { title: 'With Honors',  org: 'Crecencia Drucila Lopez SHS', year: '2024', desc: '12th Grade.' },
  { title: 'With Honor',  org: 'Crecencia Drucila Lopez SHS', year: '2023', desc: '11th Grade.' },
];



export default function AchievementsPage() {
  return (
    <div className="container">
      <div className="page-header">
        <p className="label">Achievements</p>
        <h1>Awards & Recognition</h1>
        <p>Academic honors, competition wins, and scholarships I have earned.</p>
      </div>

      

      <div className="divider" />

      <div className={styles.awardsList}>
        {awards.map((award, i) => (
          <div key={award.title} className={styles.awardItem}>
            <div className={styles.awardLeft}>
              <span className={styles.awardNum}>{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className={styles.awardBody}>
              <div className={styles.awardHead}>
                <div>
                  <h3 className={styles.awardTitle}>{award.title}</h3>
                  <p className={styles.awardOrg}>{award.org}</p>
                </div>
                <span className={styles.awardYear}>{award.year}</span>
              </div>
              <p className={styles.awardDesc}>{award.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
