import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { projects } from '@/lib/projects';

const skills = ['Python', 'TypeScript', 'Next.js', 'LLMs', 'AI Agents', 'RAG', 'Firebase'];

const experience = [
  {
    period: 'AUG 2025 — PRESENT',
    role: 'Founding Engineer',
    company: 'MCAverse',
    body: 'Building the product, assessment engine, secure backend workflows, analytics, community, and AI-assisted learning experience end to end.',
  },
  {
    period: 'MAY 2025 — PRESENT',
    role: 'Assistant Professor',
    company: 'Dayananda Sagar University',
    body: 'Built an XGBoost placement-prediction system with 87% accuracy and mentored 200+ students across data structures, software engineering, full-stack development, and AI.',
  },
  {
    period: 'JAN — APR 2025',
    role: 'Data Analyst Intern',
    company: 'Bhavya Technovision',
    body: 'Analysed large energy datasets with Python and SQL, automated data preparation, and delivered interactive decision-support dashboards.',
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" />Open to Applied AI &amp; Software Engineering roles</div>
          <p className="eyebrow">APPLIED AI / SOFTWARE ENGINEER</p>
          <h1>I build AI products<span> that hold up in the real world.</span></h1>
          <p className="hero-deck">From multimodal and agentic workflows to secure APIs and full-stack interfaces, I turn AI capabilities into reliable products people can use.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">View selected work <span aria-hidden="true">→</span></a>
            <a className="button button-secondary" href="mailto:theadarshjha22@gmail.com">Start a conversation</a>
          </div>
          <ul className="skill-list" aria-label="Core technologies">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
        </div>

        <div className="system-card" aria-label="Engineering profile overview">
          <div className="system-card-header"><div className="window-dots"><i /><i /><i /></div><span>engineering-profile.ts</span><span>01</span></div>
          <div className="system-map">
            <p className="code-comment">// product engineering, end to end</p>
            <div className="map-node map-node-strong"><span>01</span><strong>Applied AI</strong><small>multimodal · agents · RAG</small></div>
            <div className="map-line" />
            <div className="map-grid">
              <div className="map-node"><span>02</span><strong>Backend</strong><small>APIs · auth · validation</small></div>
              <div className="map-node"><span>03</span><strong>Product</strong><small>Next.js · TypeScript · UX</small></div>
            </div>
            <div className="map-status"><span>STATUS</span><strong><i /> Systems online</strong></div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        <div className="shell proof-grid">
          <div><strong>NVIDIA</strong><span>Certified in Generative AI &amp; LLMs</span></div>
          <div><strong>16 / 167</strong><span>Google PromptWars</span></div>
          <div><strong>98 / 100</strong><span>MCAverse performance / SEO</span></div>
          <div><strong>NIT KKR</strong><span>Master of Computer Applications</span></div>
        </div>
      </section>

      <section className="work-preview shell" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">SELECTED WORK</p><h2>Built for users.<br />Engineered for scale.</h2></div>
          <p>Three projects, one coherent story: product engineering, multimodal applied AI, and agent orchestration.</p>
        </div>

        <article className="project-feature">
          <div className="project-visual mcaverse-visual">
            <div className="visual-top"><span>MCAverse</span><span>mcaverse.in ↗</span></div>
            <div className="visual-copy"><small>NOW LIVE</small><strong>Practice smarter.<br />Perform better.</strong></div>
            <div className="visual-stats"><span><strong>98</strong>Performance</span><span><strong>100</strong>SEO</span><span><strong>24/7</strong>Practice</span></div>
          </div>
          <ProjectCopy project={projects[0]} />
        </article>

        <div className="project-pair">
          <article className="project-card">
            <div className="project-mini-visual medibridge-visual" aria-hidden="true">
              <div className="mini-window"><span>Multimodal input</span><b>Prescription + voice</b></div>
              <div className="flow-arrow">↓</div>
              <div className="mini-window active"><span>Validated output</span><b>Gemini → Zod</b></div>
            </div>
            <ProjectCopy project={projects[1]} compact />
          </article>
          <article className="project-card">
            <div className="project-mini-visual agents-visual" aria-hidden="true">
              <div className="agent-hub">ORCHESTRATOR</div>
              <div className="agent-grid"><span>DEBUG</span><span>REVIEW</span><span>ARCH</span></div>
              <p>Structured score + feedback</p>
            </div>
            <ProjectCopy project={projects[2]} compact />
          </article>
        </div>
      </section>

      <section className="depth-section" id="depth">
        <div className="shell">
          <div className="section-heading compact-heading">
            <div><p className="eyebrow">ENGINEERING DEPTH</p><h2>More than a model call.</h2></div>
            <p>I design the surrounding system: contracts, trust boundaries, state, evaluation, and the interface that makes the capability usable.</p>
          </div>
          <div className="depth-grid">
            <article><span>01</span><h3>AI systems</h3><p>LLM integration, multimodal input, RAG, agents, structured generation, prompt design, and evaluation strategy.</p><small>Gemini · OpenAI · LangGraph · Pinecone</small></article>
            <article><span>02</span><h3>Product &amp; backend</h3><p>Typed APIs, authentication, runtime validation, persistent state, responsive interfaces, and accessible workflows.</p><small>Python · TypeScript · Next.js · Zod</small></article>
            <article><span>03</span><h3>Reliability &amp; delivery</h3><p>Testing, authorization boundaries, CI workflows, observability thinking, deployment, performance, and SEO.</p><small>Vitest · Docker · GitHub Actions · Vercel</small></article>
          </div>
        </div>
      </section>

      <section className="experience-section shell" id="experience">
        <div className="section-heading compact-heading">
          <div><p className="eyebrow">EXPERIENCE</p><h2>Engineering, teaching,<br />and shipping.</h2></div>
          <p>My background combines hands-on product ownership with the ability to explain systems clearly and lead technical learning.</p>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <article key={item.company}>
              <span className="timeline-number">0{index + 1}</span>
              <p className="timeline-period">{item.period}</p>
              <div><h3>{item.role}</h3><strong>{item.company}</strong></div>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <div className="about-intro"><p className="eyebrow">ABOUT</p><h2>Engineer first.<br />Clear communicator always.</h2></div>
          <div className="about-copy">
            <p>I’m Adarsh Jha, an Applied AI and Software Engineer based in Bengaluru. I enjoy the point where model capability meets product reality: imperfect input, strict contracts, real users, and systems that need to fail clearly.</p>
            <p>My academic and mentoring experience strengthened a useful engineering skill—the ability to make complex systems understandable without flattening the technical detail.</p>
            <div className="achievement-list">
              <span>NVIDIA Certified Associate — Generative AI &amp; LLMs</span>
              <span>Google PromptWars — Rank 16 of 167</span>
              <span>Microsoft Learn Student Ambassador — 700+ learners mentored</span>
              <span>Dayananda Sagar University — 9.9/10 teaching feedback</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <p className="eyebrow">LET&apos;S BUILD SOMETHING USEFUL</p>
        <h2>Looking for an engineer who can take AI from capability to product?</h2>
        <div className="contact-actions">
          <a className="button button-light" href="mailto:theadarshjha22@gmail.com">Email Adarsh <span>→</span></a>
          <a href="/Adarsh-Jha-Resume.pdf" target="_blank">Read the resume ↗</a>
          <a href="https://www.linkedin.com/in/adarshjha01/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function ProjectCopy({ project, compact = false }: { project: (typeof projects)[number]; compact?: boolean }) {
  return (
    <div className={`project-content${compact ? ' compact-project-copy' : ''}`}>
      <div className="project-meta"><span>{project.number}</span><span>{project.category.toUpperCase()}</span><span className={`status-${project.statusTone}`}>{project.status.toUpperCase()}</span></div>
      <h3>{project.name}</h3>
      <p className="project-lead">{project.summary}</p>
      <ul className="project-points">{project.highlights.map((point) => <li key={point}>{point}</li>)}</ul>
      <div className="project-links">
        <a href={`/work/${project.slug}`}>Case study →</a>
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live product ↗</a>}
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Source ↗</a>}
      </div>
    </div>
  );
}
