import styles from './page.module.css';

export const metadata = { title: 'Skills | Jhareld Manalo' };

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML',             level: 75 },
      { name: 'CSS',             level: 50  },
      { name: 'JavaScript',       level: 40 },
      { name: 'TypeScript',       level: 60 },
      { name: 'React',            level: 40 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'C#',                level: 80 },
      { name: 'C++',               level: 75 },
      { name: 'PHP',               level: 70 },
    ],
  },
  {
    category: 'Database & Cloud',
    skills: [
      { name: 'MySQL',    level: 75 },
    ],
  },
  {
    category: 'Tools & Other',
    skills: [
      { name: 'GitHub',  level: 30 },
      { name: 'Linux',  level: 30 },
      { name: 'Figma',         level: 65 },
      { name: 'Xampp', level: 60 },
      { name: 'VSCode',       level: 65 },
    ],
  },
];



export default function SkillsPage() {
  return (
    <div className="container">
      <div className="page-header">
        <p className="label">Skills</p>
        <h1>What I work with</h1>
        <p>Technologies and tools I use to build products and solve problems.</p>
      </div>

      <div className="grid-2">
        {skillGroups.map((group) => (
          <div key={group.category} className="card">
            <h2 className={styles.groupTitle}>{group.category}</h2>
            <div className={styles.skillList}>
              {group.skills.map(({ name, level }) => (
                <div key={name} className={styles.skill}>
                  <div className={styles.skillTop}>
                    <span className={styles.skillName}>{name}</span>
                    <span className={styles.skillPct}>{level}%</span>
                  </div>
                  <div className={styles.bar}>
                    <div className={styles.barFill} style={{ width: `${level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
