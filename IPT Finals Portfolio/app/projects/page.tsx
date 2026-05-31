import styles from './page.module.css';

export const metadata = { title: 'Projects | Jhareld Manalo' };

const projects = [
  {
    title: 'Expense Tracker',
    category: 'Desktop Application',
    status: 'Completed',
    year: '2025',
    desc: 'A desktop application developed in C# that helps students record, organize, and monitor their daily expenses. The system allows users to track spending habits and manage their budget more effectively.',
    tags: ['C#, Windows Forum, Visual Studio'],
    links: { github: '#', live: '#' },
    featured: true,
  },
  {
    title: 'Lost and Found System',
    category: 'Web Application',
    status: 'Completed',
    year: '2026',
    desc: 'A web-based Lost and Found Management System developed for academic purposes. The system allows users to report lost items, post found items, search listings, and manage claims through an organized interface.',
    tags: ['Html & CSS', 'JavaScript', 'PHP', 'MySql', 'Xampp'],
    links: { github: '#', live: '#' },
    featured: true,
  },
 
];

export default function ProjectsPage() {
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <div className="container">
      <div className="page-header">
        <p className="label">Projects</p>
        <h1>Things I have built</h1>
        <p>A collection of personal projects, school assignments, and open-source contributions.</p>
      </div>

      <section>
        <h2 className={styles.h2}>Featured Projects</h2>
        <div className={styles.featuredGrid}>
          {featured.map((p) => (
            <div key={p.title} className={styles.featuredCard}>
              <div className={styles.cardTop}>
                <div className={styles.cardMeta}>
                  <span className="tag">{p.category}</span>
                  <span className={`tag ${p.status === 'Active' ? 'accent' : ''}`}>{p.status}</span>
                  <span className={styles.year}>{p.year}</span>
                </div>
                <div className={styles.cardLinks}>
                  {p.links.github && <a href={p.links.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>GitHub ↗</a>}
                  {p.links.live   && <a href={p.links.live}   target="_blank" rel="noopener noreferrer" className={styles.iconLink}>Live ↗</a>}
                </div>
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <div className={styles.cardTags}>
                {p.tags.map(t => <span key={t} className="tag accent">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />
    </div>
  );
}
