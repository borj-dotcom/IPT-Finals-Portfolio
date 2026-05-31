'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navLinks = [
  { href: '/',            label: 'Home' },
  { href: '/about',       label: 'About' },
  { href: '/skills',      label: 'Skills' },
  { href: '/projects',    label: 'Projects' },
  { href: '/education',   label: 'Education' },
  { href: '/achievements',label: 'Awards' },
  { href: '/resume',      label: 'Resume' },
  { href: '/hobbies',     label: 'Hobbies' },
  { href: '/gallery',     label: 'Gallery' },
  { href: '/contact',     label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoBracket}>[</span>
          <span className={styles.logoName}>My Portfolio</span>
          <span className={styles.logoBracket}>]</span>
        </Link>

        <nav className={styles.nav}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.navLink} ${pathname === href ? styles.active : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              className={`${styles.mobileLink} ${pathname === href ? styles.mobileLinkActive : ''}`}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span className={styles.mobileLinkNum}>{String(i + 1).padStart(2, '0')}</span>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
