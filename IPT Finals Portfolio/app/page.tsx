import Link from 'next/link';
import styles from './page.module.css';

const highlights = [
 
  { num: '3+', label: 'Projects', sub: 'Completed' },
  { num: '4',   label: 'Languages', sub: 'Programming' },
];

const featuredProjects = [
  {
    title: 'Expense Tracker',
    category: 'Web Application',
    desc: 'A desktop application developed in C# that helps students record, organize, and monitor their daily expenses. The system allows users to track spending habits and manage their budget more effectively.',
    tags: ['C#'],
    href: '/projects',
  },
  {
    title: 'Lost and Found System',
    category: 'Web Application',
    desc: 'A web-based Lost and Found Management System developed for academic purposes. The system allows users to report lost items, post found items, search listings, and manage claims through an organized interface.',
    tags: ['Html & CSS', 'JavaScript', 'PHP', 'MySql, Xampp'],
    href: '/projects',
  },
  
];

const quickLinks = [
  { href: '/about',        label: 'About Me',           desc: 'My story and background' },
  { href: '/skills',       label: 'Skills',             desc: 'Technologies & tools' },
  { href: '/education',    label: 'Education',          desc: 'Academic background' },
  { href: '/achievements', label: 'Achievements',       desc: 'Awards & recognition' },
  { href: '/hobbies',      label: 'Hobbies',            desc: 'Life outside code' },
  { href: '/gallery',      label: 'Gallery',            desc: 'Photos & moments' },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <p className={styles.heroLabel}>Information Technology Student</p>
              <h1 className={styles.heroHeading}>
                Hi, I&apos;m<br />
                <em>Jhareld Manalo</em>
              </h1>
              <p className={styles.heroSub}>
                Aspiring Game Developer passionate about building my own Game.
                Currently pursuing my BS in Information Technology at Pamantasan ng Lungsod ng San Pablo.
              </p>
              <div className={styles.heroBtns}>
                <Link href="/projects" className="btn btn-primary">View Projects</Link>
              
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.avatarFrame}>
                <img
                  src="/images/formal.jpg"
                  alt="Jhareld Manalo"
                  className={styles.avatar}
                />
              </div>
              <div className={styles.statusBadge}>
                <span className={styles.statusDot} />
                
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {highlights.map(({ num, label, sub }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statNum}>{num}</span>
                <span className={styles.statLabel}>{label}</span>
                <span className={styles.statSub}>{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>Work</p>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <Link href="/projects" className={styles.sectionLink}>All projects →</Link>
          </div>

          <div className="grid-3">
            {featuredProjects.map((p) => (
              <Link key={p.title} href={p.href} className={`card ${styles.projectCard}`}>
                <span className={styles.projectCat}>{p.category}</span>
                <h3 className={styles.projectTitle}>{p.title}</h3>
                <p className={styles.projectDesc}>{p.desc}</p>
                <div className={styles.projectTags}>
                  {p.tags.map(t => <span key={t} className="tag accent">{t}</span>)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Links ── */}
      <section className={`section ${styles.linksSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>Explore</p>
            <h2 className={styles.sectionTitle}>More About Me</h2>
          </div>
          <div className="grid-3">
            {quickLinks.map(({ href, label, desc }) => (
              <Link key={href} href={href} className={`card ${styles.qlCard}`}>
                <span className={styles.qlArrow}>→</span>
                <h3 className={styles.qlTitle}>{label}</h3>
                <p className={styles.qlDesc}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
