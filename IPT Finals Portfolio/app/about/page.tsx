import styles from './page.module.css';
import Link from 'next/link';

export const metadata = { title: 'About Me | Jhareld Manalo' };

export default function AboutPage() {
  return (
    <div className="container">
      <div className="page-header">
        <p className="label">About</p>
        <h1>A little about me</h1>
        <p>Student, Gamer and Hustler.</p>
      </div>

      <div className={styles.layout}>
        <div className={styles.main}>
          <section className={styles.bio}>
            <h2 className={styles.h2}>My Background</h2>
            <p>Hi! My name is Jhareld Manalo, I am a second-year Bachelor of Science in Information Technology (BSIT) student at Pamantasan ng Lungsod ng San Pablo. Ever since I was young, I have been fascinated by how technology works, which sparked my interest in computers, programming, and game development..</p>
            <p>During my senior high school years, I took the Humanities and Social Sciences (HUMSS) strand. Despite coming from a non-technical background, I decided to pursue a BSIT degree in college because I wanted to follow my passion for technology and work toward my dream of creating my own video games someday..</p>
            <p>Outside of academics, I engage in various online side hustles to support myself and help my parents financially. These experiences have taught me the value of hard work, perseverance, and continuous learning..</p>
            <p>My goal is to build a successful career in the technology industry, achieve financial stability, and lift my family out of poverty while doing what I genuinely love. I believe that with dedication, determination, and the right opportunities, I can turn my passion into a meaningful and rewarding future..</p>
          </section>

          <div className="divider" />

          <section>
            <h2 className={styles.h2}>What I Value</h2>
            <div className={styles.values}>
              {[
                { icon: '◈', title: 'Continuous Learning', desc: 'Technology moves fast. I stay curious and always push to learn something new every day.' },
                { icon: '◉', title: 'Clean Code',          desc: 'I believe good code is readable, maintainable, and solves the right problem efficiently.' },
                { icon: '◐', title: 'Collaboration',       desc: 'Great products are built by great teams. I thrive in environments that value open communication.' },
                { icon: '◑', title: 'Impact',              desc: 'I want the work I do to matter, whether it helps one person or a million.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className={styles.valueCard}>
                  <span className={styles.valueIcon}>{icon}</span>
                  <div>
                    <h3 className={styles.valueTitle}>{title}</h3>
                    <p className={styles.valueDesc}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.infoCard}>
            <img
              src="/images/formal.jpg"
              alt="Jhareld Manalo"
              className={styles.photo}
            />
            <div className={styles.infoList}>
              {[
                { label: 'Name',     value: 'Jhareld Manalo' },
                { label: 'Email',    value: 'jhareldmanalo006@gmail.com' },
                { label: 'Location', value: 'San Pablo, Laguna' },
                { label: 'Degree',   value: 'BS Information Technology' },
                { label: 'Year',     value: '2rd Year (2025-2026)' },
              ].map(({ label, value }) => (
                <div key={label} className={styles.infoRow}>
                  <span className={styles.infoLabel}>{label}</span>
                  <span className={styles.infoValue}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
