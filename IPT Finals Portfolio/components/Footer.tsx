import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = [
  { href: '/about',        label: 'About' },
  { href: '/skills',       label: 'Skills' },
  { href: '/projects',     label: 'Projects' },
  { href: '/education',    label: 'Education' },
  { href: '/achievements', label: 'Awards' },
  { href: '/hobbies',      label: 'Hobbies' },
  { href: '/gallery',      label: 'Gallery' },
  { href: '/resume',       label: 'Resume' },
  { href: '/contact',      label: 'Contact' },
];

const socials = [
  { href: 'https://github.com', label: 'GitHub' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
  { href: 'https://twitter.com', label: 'Twitter' },
  { href: 'mailto:alex@example.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.bracket}>[</span>
              Jhareld Manalo
              <span className={styles.bracket}>]</span>
            </Link>
            <p className={styles.tagline}>
              BSIT · Developer · Gamer
            </p>
          </div>

          <div className={styles.linksGroup}>
            <span className={styles.groupLabel}>Navigation</span>
            <div className={styles.links}>
              {footerLinks.map(({ href, label }) => (
                <Link key={href} href={href} className={styles.link}>{label}</Link>
              ))}
            </div>
          </div>

          <div className={styles.linksGroup}>
            <span className={styles.groupLabel}>Connect</span>
            <div className={styles.links}>
              {socials.map(({ href, label }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  {label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            © {new Date().getFullYear()} Jhareld Manalo. All rights reserved.
          </span>
          <span className={styles.built}>
            Built with Next.js · App Router
          </span>
        </div>
      </div>
    </footer>
  );
}
