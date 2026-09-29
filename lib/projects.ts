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
      { value: 'Live', label: 'Deployed learning platform' },
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
      { value: 'Gemini', label: '2.5 Flash Lite integration' },
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
      'Gemini 2.5 Flash Lite JSON output',
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
      'The public source implements authenticated multimodal requests, Gemini JSON generation, Zod validation, and user-scoped Firestore persistence. This is an engineering prototype; clinical accuracy has not been established. Schema validation checks response structure, not medical correctness.',
    next: [
      'Add a domain-specific clinical knowledge retrieval layer',
      'Build evaluation datasets for extraction and risk classification',
      'Measure latency, cost, and failure rates on a fixed evaluation set',
    ],
    githubUrl: 'https://github.com/adarshjha01/Medibridge',
  },
  {
    slug: 'tech-lead-simulator',
    number: '03',
    name: 'Multi-Agent Tech Lead Simulator',
    category: 'Agent Engineering',
    status: 'Portfolio project',
    statusTone: 'progress',
    summary:
      'An agentic software-engineering simulator for generating technical scenarios, coordinating AI review workflows, and returning structured scoring and recommendations.',
    overview:
      'The simulator is designed as an interactive practice environment for engineering judgment. It generates debugging and architecture situations, orchestrates specialist review behavior, and converts the result into structured feedback that can be inspected and improved over time.',
    role: 'AI Product Engineer',
    period: 'See current resume',
    stack: ['Next.js 15', 'TypeScript', 'React', 'Lyzr AI Agents', 'REST APIs'],
    proof: [
      { value: 'Async', label: 'Agent orchestration' },
      { value: 'Typed', label: 'Structured responses' },
      { value: 'Lyzr', label: 'AI agent integration' },
    ],
    highlights: [
      'Asynchronous orchestration with adaptive polling',
      'Schema-validated technical review responses',
      'Persistent scenario and feedback state',
    ],
    architecture: [
      'Scenario request',
      'Orchestration controller',
      'Lyzr AI agent workflow',
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
      'Implemented scenario generation, structured code reviews, technical scoring, and learning recommendations using Lyzr AI Agents, as described in my resume. Public source is currently unavailable; the next step is to make the workflow independently inspectable.',
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

const mentor: Project = {
  slug: 'socratic-ai-mentor', number: '04', name: 'Socratic AI Mentor',
  category: 'Conversational AI', status: 'Public prototype', statusTone: 'public',
  summary: 'A Python learning assistant that guides students through project problems with progressively deeper hints, using LangChain, Groq, and Streamlit.',
  overview: 'Students describe where they are stuck. A conversational interface retains the session history and prompts Llama 3.1 to respond with a nudge, a conceptual clue, or a step-by-step explanation instead of a direct code solution.',
  role: 'Developer', period: 'Personal project',
  stack: ['Python', 'LangChain', 'Groq', 'Llama 3.1 8B', 'Streamlit'],
  proof: [{value: '3 levels', label: 'Prompted hint progression'}, {value: 'Session', label: 'Conversation history'}, {value: 'Public', label: 'Inspectable Python source'}],
  highlights: ['LangChain messages and Groq model integration', 'Conversation history in Streamlit session state', 'Prompt-designed hints for student problem solving'],
  architecture: ['Student question', 'Session conversation history', 'LangChain ChatGroq', 'Llama 3.1 8B Instant', 'Hint rendered in Streamlit'],
  decisions: [
    {title: 'Guide the reasoning', body: 'The system prompt describes three hint levels: a leading question, a conceptual clue, and an explanation of the algorithm. Progression is model-driven rather than enforced by a state machine.'},
    {title: 'Preserve conversational context', body: 'Human and AI messages are kept in Streamlit session state and sent with the next request so follow-up questions retain context.'},
    {title: 'Keep the prototype focused', body: 'A small Python application makes the prompt and message lifecycle easy to inspect. API configuration comes from Streamlit secrets, with a visible error when configuration is missing.'}
  ],
  challenge: 'A prompt can request that a model avoid giving code, but cannot guarantee it. Evaluating hint quality and instruction adherence is the next engineering challenge.',
  outcome: 'The repository demonstrates a complete conversational LLM integration in Python. It does not yet establish learning outcomes, persistent cross-session memory, or measured instruction adherence.',
  next: ['Evaluate hint quality and direct-answer leakage on fixed student scenarios', 'Add explicit hint-level state and a bounded context window', 'Add request tests, latency measurements, and persistent sessions'],
  githubUrl: 'https://github.com/adarshjha01/socratic-ai-mentor.'
};
projects.push(mentor);
const order = ['medibridge', 'tech-lead-simulator', 'mcaverse', 'socratic-ai-mentor'];
projects.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
projects.forEach((project, index) => { project.number = String(index + 1).padStart(2, '0'); });
