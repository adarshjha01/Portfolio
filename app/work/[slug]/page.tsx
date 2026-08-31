import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getProject, projects } from '@/lib/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.name} — Case Study | Adarsh Jha`;
  return {
    title,
    description: project.summary,
    openGraph: { title, description: project.summary, images: [] },
    twitter: { card: 'summary', title, description: project.summary, images: [] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main>
      <SiteHeader />
      <article className="case-study shell">
        <a className="back-link" href="/#work">← All selected work</a>
        <header className="case-hero">
          <div>
            <p className="eyebrow">{project.number} / {project.category.toUpperCase()}</p>
            <h1>{project.name}</h1>
            <p>{project.summary}</p>
          </div>
          <dl className="case-facts">
            <div><dt>ROLE</dt><dd>{project.role}</dd></div>
            <div><dt>PERIOD</dt><dd>{project.period}</dd></div>
            <div><dt>STATUS</dt><dd className={`status-${project.statusTone}`}>{project.status}</dd></div>
          </dl>
        </header>

        <section className={`case-banner banner-${project.slug}`}>
          <div className="case-banner-copy">
            <span>{project.category}</span>
            <strong>{project.name}</strong>
            <p>{project.status}</p>
          </div>
          <div className="banner-architecture" aria-hidden="true">
            {project.architecture.slice(0, 3).map((step, index) => <div key={step}><i>0{index + 1}</i><span>{step}</span></div>)}
          </div>
        </section>

        <section className="case-overview case-split">
          <p className="section-index">01 / OVERVIEW</p>
          <div><h2>Turning a capability into a dependable workflow.</h2><p>{project.overview}</p></div>
        </section>

        <section className="case-proof">
          {project.proof.map((proof) => <div key={proof.label}><strong>{proof.value}</strong><span>{proof.label}</span></div>)}
        </section>

        <section className="case-section">
          <div className="case-split section-intro">
            <p className="section-index">02 / ARCHITECTURE</p>
            <div><h2>The system, end to end.</h2><p>Each boundary has a clear responsibility, keeping probabilistic model behavior separate from product state and trusted operations.</p></div>
          </div>
          <div className="architecture-flow">
            {project.architecture.map((step, index) => (
              <div key={step} className="architecture-step"><span>0{index + 1}</span><strong>{step}</strong>{index < project.architecture.length - 1 && <i aria-hidden="true">→</i>}</div>
            ))}
          </div>
        </section>

        <section className="case-section">
          <div className="case-split section-intro">
            <p className="section-index">03 / DECISIONS</p>
            <div><h2>Technical decisions with a reason.</h2><p>The portfolio shows why the system was built this way—not only which libraries appear in the repository.</p></div>
          </div>
          <div className="decision-grid">
            {project.decisions.map((decision, index) => <article key={decision.title}><span>0{index + 1}</span><h3>{decision.title}</h3><p>{decision.body}</p></article>)}
          </div>
        </section>

        <section className="case-section challenge-grid">
          <div><p className="section-index">04 / CHALLENGE</p><h2>What made it difficult.</h2><p>{project.challenge}</p></div>
          <div><p className="section-index">05 / OUTCOME</p><h2>What the work proves.</h2><p>{project.outcome}</p></div>
        </section>

        <section className="case-section stack-section">
          <div><p className="section-index">STACK</p><h2>Technology used</h2></div>
          <ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="case-section next-section">
          <p className="section-index">06 / NEXT ITERATION</p>
          <h2>What I would improve next.</h2>
          <ol>{project.next.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol>
          <div className="case-actions">
            {project.liveUrl && <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">Open live product ↗</a>}
            {project.githubUrl && <a className="button button-secondary" href={project.githubUrl} target="_blank" rel="noreferrer">View source ↗</a>}
            {!project.liveUrl && !project.githubUrl && <span className="in-progress-note">Public links will be added after the reliability work is complete.</span>}
          </div>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
