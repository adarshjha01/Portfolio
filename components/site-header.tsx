import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Adarsh Jha, home">
        <span className="wordmark-mark">AJ</span>
        <span>Adarsh Jha</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#work">Projects</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/#about">About</Link>
        <a href="https://github.com/adarshjha01" target="_blank" rel="noreferrer">GitHub</a>
        <ThemeToggle />
        <a className="nav-resume" href="/Adarsh-Jha-Resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
      </nav>
    </header>
  );
}
