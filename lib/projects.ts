export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  status: string;
  statusTone: 'live' | 'public' | 'progress';
  summary: string;
  overview: string;
  role: string;
  period: string;
  stack: string[];
  proof: { value: string; label: string }[];
  highlights: string[];
  architecture: string[];
  decisions: { title: string; body: string }[];
  challenge: string;
  outcome: string;
  next: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: 'mcaverse',
    number: '01',
    name: 'MCAverse',
    category: 'Product Engineering',
    status: 'Live product',
    statusTone: 'live',
    summary:
      'A production learning platform combining mock tests, daily practice, community, analytics, and AI-assisted learning for MCA aspirants.',
    overview:
      'MCAverse turns a fragmented exam-preparation journey into one focused product. Students can practise daily, take persistent mock tests, study performance trends, learn from video resources, and participate in a community without switching between disconnected tools.',
    role: 'Founding Engineer',
    period: '2025 — Present',
    stack: ['Next.js 15', 'TypeScript', 'Firebase', 'Zod', 'Tailwind CSS', 'KaTeX'],
    proof: [
      { value: '98', label: 'Lighthouse performance' },
      { value: '100', label: 'Lighthouse SEO' },
      { value: '24/7', label: 'Practice access' },
    ],
    highlights: [
      'Persistent assessment sessions and learning analytics',
      'Secure server-side authorization and curriculum workflows',
      'SEO-first architecture with mathematical rendering',
    ],
    architecture: [
      'Next.js App Router',
      'Server Actions & REST APIs',
      'Firebase Admin trust boundary',
      'Firestore, Auth & Storage',
      'Analytics & learning experience',
    ],
    decisions: [
      {
        title: 'Persistent test sessions',
        body: 'Assessment state survives navigation and interruption, protecting the learner’s progress during long mock-test sessions.',
      },
      {
        title: 'Server-owned authorization',
        body: 'Sensitive curriculum and administrative workflows are checked on the server instead of trusting browser state.',
      },
      {
        title: 'Performance as a feature',
        body: 'The information architecture, rendering strategy, and asset handling were designed for search visibility and fast access on student devices.',
      },
    ],
    challenge:
      'The hard part was not creating another question bank. It was coordinating assessment state, mathematical content, authorization, analytics, and community features inside one coherent product.',
    outcome:
      'The result is a deployed, full-stack education product with a measurable performance baseline and a foundation for deeper AI-assisted learning.',
    next: [
      'Add grounded concept explanations to the AI assistant',
      'Publish verified learner and assessment metrics',
      'Introduce systematic evaluation for AI-generated guidance',
    ],
    liveUrl: 'https://mcaverse.in',
    githubUrl: 'https://github.com/adarshjha01/mcaverse',
  },
  {
    slug: 'medibridge',
    number: '02',
    name: 'MediBridge',
    category: 'Multimodal Applied AI',
    status: 'Public repository',
    statusTone: 'public',
    summary:
      'A multimodal AI triage prototype that processes prescription images and voice or text symptoms through a protected, schema-validated Gemini workflow.',
    overview:
      'MediBridge explores how multimodal model inputs can be turned into a reliable, typed product workflow. A signed-in user submits a prescription image with spoken or written symptoms; the server verifies identity, constrains the model response, validates it again, and stores the result in user-scoped history.',
    role: 'Product & AI Engineer',
    period: '2026',
    stack: ['Next.js 16', 'TypeScript', 'Gemini', 'Firebase Admin', 'Firestore', 'Zod', 'Vitest'],
    proof: [
      { value: '2×', label: 'Schema validation layers' },
      { value: '14', label: 'Unit & component tests' },
      { value: '3', label: 'Input modalities' },
    ],
    highlights: [
      'Firebase ID-token verification on the server',
      'Model-level schema plus runtime Zod validation',
      'User-scoped history and accessible result states',
    ],
    architecture: [
      'Prescription image + symptoms',
      'Authenticated Next.js API route',
      'Gemini structured generation',
      'Zod runtime validation',
      'User-scoped Firestore history',
    ],
    decisions: [
      {
        title: 'Trust is enforced server-side',
        body: 'Firebase client state enables the experience, but Firebase Admin verifies the caller before AI processing or persistence.',
      },
      {
        title: 'Structured output twice',
        body: 'The model is instructed with a response schema, then Zod validates the parsed payload so malformed generations do not silently reach the UI.',
      },
      {
        title: 'Clear operational limits',
        body: 'Image and audio payload limits, guarded environment variables, typed contracts, and explicit failure states keep the workflow bounded.',
      },
    ],
    challenge:
      'Multimodal output is probabilistic while the interface needs predictable, typed states. The architecture therefore treats model output as untrusted data until it passes runtime validation.',
    outcome:
      'The public repository demonstrates a complete multimodal request lifecycle, an explicit security boundary, persisted results, and test coverage—not only a prompt connected to a UI.',
    next: [
      'Add a domain-specific clinical knowledge retrieval layer',
      'Build evaluation datasets for extraction and risk classification',
      'Resolve the remaining collection-name and README drift',
    ],
    githubUrl: 'https://github.com/adarshjha01/Medibridge',
  },
  {
    slug: 'tech-lead-simulator',
    number: '03',
    name: 'Multi-Agent Tech Lead Simulator',
    category: 'Agent Engineering',
    status: 'Active development',
    statusTone: 'progress',
    summary:
      'An agentic software-engineering simulator for generating technical scenarios, coordinating AI review workflows, and returning structured scoring and recommendations.',
    overview:
      'The simulator is designed as an interactive practice environment for engineering judgment. It generates debugging and architecture situations, orchestrates specialist review behavior, and converts the result into structured feedback that can be inspected and improved over time.',
    role: 'AI Product Engineer',
    period: 'In progress',
    stack: ['Next.js 15', 'TypeScript', 'React', 'AI Agents', 'REST APIs', 'Zod'],
    proof: [
      { value: 'Async', label: 'Agent orchestration' },
      { value: 'Typed', label: 'Structured responses' },
      { value: 'HITL', label: 'Planned review loop' },
    ],
    highlights: [
      'Asynchronous orchestration with adaptive polling',
      'Schema-validated technical review responses',
      'Persistent scenario and feedback state',
    ],
    architecture: [
      'Scenario request',
      'Orchestration controller',
      'Specialist agent workflow',
      'Schema-validated review',
      'Score & learning recommendations',
    ],
    decisions: [
      {
        title: 'Async by design',
        body: 'Agent work is treated as a long-running workflow with explicit progress, polling, and failure states rather than a single blocking request.',
      },
      {
        title: 'Feedback has a contract',
        body: 'Technical scoring and recommendations use structured responses so the product can render, compare, and eventually evaluate outputs.',
      },
      {
        title: 'Scope before spectacle',
        body: 'The next iteration focuses on traceability, evaluation, and failure recovery before expanding the number of agents.',
      },
    ],
    challenge:
      'A multi-agent diagram is easy to draw; reliable orchestration is harder. The current work is focused on state, retries, traceability, and proving when multiple agents outperform a simpler workflow.',
    outcome:
      'The project already establishes the interaction and response contract. The public demo and repository will be linked after the reliability work is complete.',
    next: [
      'Publish the repository and working demo',
      'Add tracing, retry policy, and token-cost metrics',
      'Evaluate multi-agent quality against a single-agent baseline',
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
