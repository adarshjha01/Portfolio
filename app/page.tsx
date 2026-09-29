import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { projects } from '@/lib/projects';

const skills = ['Python', 'TypeScript', 'Gemini', 'LangChain', 'Lyzr AI Agents', 'Next.js'];

const experience = [
  {
    period: 'AUG 2025 — PRESENT',
    role: 'Founding Engineer',
    company: 'MCAverse · Mohali',
    body: 'Building the product, assessment engine, secure backend workflows, analytics, community, and AI-assisted learning experience end to end.',
  },
  {
    period: 'AUG 2026 — PRESENT',
    role: 'Technical Trainer — AI & Data Structures and Algorithms',
    company: 'Chandigarh University · Mohali',
    body: 'Deliver regular and placement-oriented DSA training focused on algorithmic problem solving, complexity analysis, interview patterns, and company-specific preparation. Conduct hands-on AI and Generative AI sessions covering LLM applications, prompt engineering, and practical projects.',
  },
  {
    period: 'MAY 2025 — JUL 2026',
    role: 'Assistant Professor — School of Computer Applications',
    company: 'Dayananda Sagar University · Bengaluru',
    body: 'Built an XGBoost placement-prediction system with 87% accuracy and mentored 200+ students across data structures, software engineering, full-stack development, and AI. Maintained 9.9/10 teaching feedback and authored a research paper for publication.',
  },
  {
    period: 'JAN — APR 2025',
    role: 'Data Analyst Intern',
    company: 'Bhavya Technovision · Remote',
    body: 'Analysed large energy datasets with Python and SQL, automated data preparation, and delivered interactive decision-support dashboards.',
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" />Open to Applied AI &amp; GenAI Engineer roles</div>
          <p className="eyebrow">ADARSH JHA · APPLIED AI ENGINEER</p>
          <h1>I build AI applications<span> from model to product.</span></h1>
          <p className="hero-deck">Multimodal workflows with Gemini. Agent-based engineering tools with Lyzr. Conversational AI with Python. I build the APIs, validation, and interfaces around the models.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore AI projects <span aria-hidden="true">→</span></a>
            <a className="button button-secondary" href="/Adarsh-Jha-Resume.pdf" target="_blank" rel="noreferrer">View resume ↗</a>
          </div>
          <ul className="skill-list" aria-label="Core technologies">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
        </div>

        <aside className="hero-projects" aria-label="Selected AI work">
          <p className="eyebrow">EXPLORE THE WORK</p>
          <Link href="/work/medibridge"><span>01 · MULTIMODAL AI</span><strong>MediBridge ↗</strong><p>Image, voice, and text → Gemini → validated JSON</p></Link>
          <Link href="/work/tech-lead-simulator"><span>02 · AGENT WORKFLOWS</span><strong>Tech Lead Simulator ↗</strong><p>Lyzr agents → structured reviews and technical scoring</p></Link>
          <Link href="/work/socratic-ai-mentor"><span>03 · CONVERSATIONAL AI</span><strong>Socratic AI Mentor ↗</strong><p>Python + LangChain → progressive learning hints</p></Link>
          <div className="hero-profile-links"><a href="https://github.com/adarshjha01">GitHub ↗</a><a href="https://www.linkedin.com/in/adarshjha01/">LinkedIn ↗</a><a href="mailto:theadarshjha22@gmail.com">Email ↗</a></div>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        <div className="shell proof-grid">
          <div><strong>NVIDIA</strong><span>Certified in Generative AI &amp; LLMs</span></div>
          <div><strong>16 / 167</strong><span>Google PromptWars</span></div>
          <div><strong>98 Performance</strong><span>MCAverse · 100 Lighthouse SEO</span></div>
          <div><strong>NIT Kurukshetra</strong><span>MCA · 8.11/10 CGPA</span></div>
        </div>
      </section>

      <section className="work-preview shell" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">SELECTED WORK</p><h2>AI workflows.<br />Working products.</h2></div>
          <p>Selected work in multimodal generation, agent orchestration, conversational AI, and deployed product engineering.</p>
        </div>

        <div className="project-pair selected-projects">
          {projects.map((project) => <article className="project-card" key={project.slug}>
            <ProjectCopy project={project} compact />
          </article>)}
        </div>
        <div className="supporting-project"><div><p className="eyebrow">ALSO ON GITHUB · NLP EXPERIMENT</p><h3>YouTube Transcript Summarizer</h3><p>A Python and Gradio prototype connecting transcript retrieval to Hugging Face DistilBART summarization. Demonstrates model-pipeline integration; long-context handling and multilingual quality remain evaluation work.</p></div><a href="https://github.com/adarshjha01/Youtube-Video-Summariser" target="_blank" rel="noreferrer">View source ↗</a></div>
      </section>

      <section className="depth-section" id="depth">
        <div className="shell">
          <div className="section-heading compact-heading">
            <div><p className="eyebrow">ENGINEERING DEPTH</p><h2>Skills behind the work.</h2></div>
            <p>My core project work connects LLM integrations with application engineering. The broader toolkit below reflects my current resume.</p>
          </div>
          <div className="depth-grid">
            <article><span>01 · AI / LLM</span><h3>Models &amp; workflows</h3><p>Gemini, Lyzr AI Agents, LangChain, LangGraph, RAG, prompt engineering, OpenAI API, and Anthropic Claude.</p><small><Link href="/work/medibridge">Multimodal AI →</Link> · <Link href="/work/socratic-ai-mentor">Conversational AI →</Link></small></article>
            <article><span>02 · SOFTWARE ENGINEERING</span><h3>Languages &amp; frameworks</h3><p>Python, TypeScript, JavaScript, Java, SQL, and C++. Next.js, React, Node.js, and REST APIs.</p><small><Link href="/work/mcaverse">See MCAverse architecture →</Link></small></article>
            <article><span>03 · DATA &amp; DELIVERY</span><h3>Storage &amp; tooling</h3><p>Firebase Firestore, MySQL, Pinecone, Docker, Git, GitHub Actions, Linux, Vercel, and Postman.</p><small>Authentication · Persistent state · Runtime validation</small></article>
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
            <p>I’m Adarsh Jha, an Applied AI Engineer based in Mohali. I enjoy the point where model capability meets product reality: imperfect input, strict contracts, real users, and systems that need to fail clearly.</p>
            <p>My academic and mentoring experience strengthened a useful engineering skill—the ability to make complex systems understandable without flattening the technical detail.</p>
            <div className="achievement-list">
              <span>NVIDIA Certified Associate — Generative AI &amp; LLMs · Valid through July 2028</span>
              <span>Google PromptWars — Rank 16/167 · Score 91/100 · Individual participant at Google Bangalore</span>
              <span>Microsoft Learn Student Ambassador — 700+ learners mentored</span>
              <span>Dayananda Sagar University — 9.9/10 teaching feedback</span>
            </div>
          </div>
        </div>
      </section>

      <section className="education-section shell" id="education">
        <p className="eyebrow">EDUCATION</p><h2>Computer science foundations.</h2>
        <div className="education-grid">
          <article><h3>Master of Computer Applications</h3><p>National Institute of Technology Kurukshetra</p><span>Aug 2022 – May 2025 · CGPA 8.11/10</span></article>
          <article><h3>Bachelor of Computer Applications</h3><p>Khwaja Moinuddin Chishti Language University</p><span>Jul 2018 – May 2021 · CGPA 8.46/10</span></article>
        </div>
        <a className="text-link" href="https://leetcode.com/u/adarshjha01/" target="_blank" rel="noreferrer">Algorithmic problem solving on LeetCode ↗</a>
      </section>

      <section className="contact-section shell" id="contact">
        <p className="eyebrow">LET&apos;S BUILD SOMETHING USEFUL</p>
        <h2>Let’s build useful AI applications.</h2>
        <p className="contact-deck">Open to Applied AI and GenAI Engineer opportunities · Mohali, India</p>
        <div className="contact-actions">
          <a className="button button-light" href="mailto:theadarshjha22@gmail.com">theadarshjha22@gmail.com <span>→</span></a>
          <a href="/Adarsh-Jha-Resume.pdf" target="_blank" rel="noreferrer">Read the resume ↗</a>
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
      <p className="project-stack">{project.stack.slice(0, 5).join(" · ")}</p>
      <ul className="project-points">{project.highlights.map((point) => <li key={point}>{point}</li>)}</ul>
      <div className="project-links">
        <a href={`/work/${project.slug}`}>Case study →</a>
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live product ↗</a>}
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Source ↗</a>}
      </div>
    </div>
  );
}
