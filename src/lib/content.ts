export const profile = {
  name: "Hammad Ahmed",
  title: "Full-Stack Developer & Tech Lead",
  email: "hamahmed95@gmail.com",
  linkedin: "https://linkedin.com/in/hammad23",
  github: "https://github.com/madbat95",
  resumeUrl: "/resume.pdf",
};

export const heroLine =
  "Full-stack dev and tech lead, about 5 years in now. I end up touching everything on a project — frontend, backend, the infra nobody wants to deal with — and these days that includes leaning on Claude and Copilot to move faster.";

export const aboutParagraphs = [
  "I've spent the last 5+ years building enterprise apps end to end — sitting in on the requirements calls with clients, figuring out the architecture, then actually building it. I've been the engineer and the product owner often enough that I don't really separate the two anymore.",
  "Lately I've also been leaning on Claude and Copilot day to day, and messing around with splitting bigger builds across multiple AI agents — one owns the frontend, one owns the backend, both working off the same shared contract so they're not stepping on each other.",
];

export const skillGroups = [
  { file: "frontend", ext: "tsx", items: ["Angular", "Next.js", "React 19", "TypeScript", "Tailwind CSS", "Ant Design"] },
  { file: "backend", ext: "ts", items: ["NestJS", "Django REST", "TypeORM", "Node.js", "PostgreSQL", "SQL Server"] },
  { file: "state-and-data", ext: "ts", items: ["TanStack Query", "RxJS", "Zustand", "WebSockets"] },
  { file: "cloud", ext: "yml", items: ["AWS S3", "Azure Blob", "Stripe", "PayPal", "SendGrid", "Google APIs", "Microsoft Graph"] },
  { file: "tools", ext: "json", items: ["Jest", "Git", "Jira", "Chart.js", "Recharts", "Zod", "Radix UI"] },
  { file: "languages", ext: "ts", items: ["TypeScript", "JavaScript", "Python", "Java"] },
  { file: "ai-assisted-dev", ext: "ts", items: ["Claude", "GitHub Copilot"] },
];

export type Project = {
  slug: string;
  fileHeader: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  codeUrl: string;
  demoUrl: string;
  noteSummary: string;
  noteBody: string;
};

export const projects: Project[] = [
  {
    slug: "chef-homd",
    fileHeader: "chef-claude/README.md",
    title: "Chef Homd",
    tagline: "AI recipe generator",
    description:
      "Add at least four ingredients you've actually got in the kitchen and it hands back a full recipe, mostly built from what you gave it, using a Hugging Face-hosted Llama 3.1 model. Type in nonsense and it just gets confused instead of making something up; throw in a mix of real food and junk and it'll call you out before cooking with whatever's actually usable.",
    stack: ["JavaScript", "Vite", "Hugging Face — Llama 3.1"],
    codeUrl: "https://github.com/madbat95/chef-claude",
    demoUrl: "https://chef-claude-ecru-one.vercel.app",
    noteSummary: "Why this is more than a recipe app",
    noteBody:
      "It's really just a small case study in defending against prompt injection — validating input on the client, keeping what the user types away from the actual system instructions, and having the model sort real ingredients from junk before it's allowed to cook anything up.",
  },
  {
    slug: "whiteboard",
    fileHeader: "whiteboard/README.md",
    title: "Whiteboard",
    tagline: "Real-time collaborative canvas",
    description:
      "Pick a display name, spin up a board, send the link. Whoever opens it shows up live — cursor, name tag, colored avatar — and you're all drawing on the same canvas at once. Every stroke and edit syncs right away, undo/redo included, and the board's saved so it's still there next time you open it.",
    stack: ["Next.js", "Canvas API", "NestJS", "Socket.io", "PostgreSQL", "Redis"],
    codeUrl: "https://github.com/madbat95/whiteboard",
    demoUrl: "https://whiteboard-nu-one.vercel.app",
    noteSummary: "How it was actually built",
    noteBody:
      "I split this one across two AI agents working at the same time — one did the whole frontend, the other the whole backend. Before either touched code, I wrote out a shared TypeScript contract covering every WebSocket event and REST route, so neither side had to guess what the other was doing. Each agent tested its own half before calling it done, then I did one final pass myself to make sure both sides actually lined up.",
  },
];

export type ClientProject = {
  name: string;
  roleLine: string;
  description: string;
};

export const clientProjects: ClientProject[] = [
  {
    name: "Nebula Academy",
    roleLine: "Tech Lead & Product Owner — Shispare",
    description:
      "An AI-powered LMS I'm building full-stack on Next.js, NestJS, and Postgres — I'm also the one sitting across from the client at every stage of it.",
  },
  {
    name: "FMCSA",
    roleLine: "Software Engineer — BitByteCyber",
    description:
      "Moved a legacy system over to an Angular-based CRM for the US trucking industry. It's handling tens of thousands of visits a week now.",
  },
  {
    name: "BOIFiling",
    roleLine: "Software Engineer — BitByteCyber",
    description:
      "A role-based CRM portal for a US company's BOI filing compliance process — more permission logic than I'd like to admit.",
  },
  {
    name: "Event Hippie",
    roleLine: "Software Engineer — BitByteCyber",
    description:
      "A ticket platform with Stripe and Twilio wired in, plus a form builder that adapts itself depending on the ticket type.",
  },
  {
    name: "Trophy Hunter",
    roleLine: "Software Engineer — BitByteCyber",
    description: "An event portal for hunting season — notifications, real-time chat, the works.",
  },
  {
    name: "Arbitration",
    roleLine: "Software Engineer — BitByteCyber",
    description:
      "A conflict-resolution tool for tracking witnesses, claimants, respondents, and all the evidence tied to a case.",
  },
];

export type ExperienceEntry = {
  hash: string;
  dateRange: string;
  role: string;
  company: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    hash: "HEAD",
    dateRange: "Aug 2025 — present",
    role: "Tech Lead — Full-Stack Developer & Product Owner",
    company: "Shispare",
    description:
      "Running point on Nebula Academy, an AI-powered LMS — I handle the client side as Product Owner (discovery, sprint planning, all of it) and build both ends of the stack: the Next.js/React frontend and the NestJS + TypeORM + Postgres backend, plus the role-based dashboards, Stripe-backed exam flow, and the Google Meet/Teams integrations.",
  },
  {
    hash: "#3",
    dateRange: "Jan 2023 — Aug 2025",
    role: "Software Engineer",
    company: "BitByteCyber",
    description:
      "Two and a half years building Angular apps for production clients — multi-step forms that had to handle a lot of edge cases, real-time chat over WebSockets, permission systems with CASL, payment integrations wired straight into the frontend, plus the odd Chrome extension and calendar dashboard along the way.",
  },
  {
    hash: "#2",
    dateRange: "Jul 2020 — Dec 2022",
    role: "Application Consultant / Software Engineer",
    company: "Makeen.io",
    description:
      "Rolled out Makeen Transform on client systems, working with teams across the business to get each solution tailored right.",
  },
  {
    hash: "#1",
    dateRange: "Dec 2019 — Jun 2020",
    role: "Business Intelligence Consultant",
    company: "Blutech Consulting",
    description:
      "My first real job — automating ETL pipelines with SSIS/SSRS for regulatory reporting, building REST APIs in Django, and using OpenCV to pull data off NIC cards.",
  },
];
