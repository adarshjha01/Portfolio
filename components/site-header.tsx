import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Adarsh Jha, home">
        <span className="wordmark-mark">AJ</span>
        <span>Adarsh Jha</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="/#work">Work</a>
        <a href="/#experience">Experience</a>
        <a href="/#about">About</a>
        <a href="https://github.com/adarshjha01" target="_blank" rel="noreferrer">GitHub</a>
        <ThemeToggle />
        <a className="nav-resume" href="/Adarsh-Jha-Resume.pdf" target="_blank">Resume ↗</a>
      </nav>
    </header>
  );
}
