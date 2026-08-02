export const profile = {
  name: "Hammad Ahmed",
  title: "Senior Full-Stack Developer",
  email: "hamahmed95@gmail.com",
  linkedin: "https://linkedin.com/in/hammad23",
  github: "https://github.com/madbat95",
  location: "Karachi, Pakistan · open to remote / global roles",
  resumeUrl: "/resume.pdf",
};

export const heroLine =
  "Senior full-stack dev, 6 years in tech now (a couple of those in BI and ETL before I moved into full-stack). I end up touching everything on a project: frontend, backend, the infra nobody wants to deal with. Lately that also means leaning on Claude and Copilot to move faster.";

export const aboutParagraphs = [
  "I've spent the last 5+ years building enterprise apps end to end, with a couple more years before that doing BI and ETL work. That means sitting in on requirements calls with clients, figuring out the architecture, then actually building it. I've been the engineer and the product owner often enough that I don't really separate the two anymore.",
  "Lately I've also been leaning on Claude and Copilot day to day, and messing around with splitting bigger builds across multiple AI agents. One owns the frontend, one owns the backend, both working off the same shared contract so they're not stepping on each other.",
];

export const skillGroups = [
  { file: "frontend", ext: "tsx", items: ["Angular", "Next.js", "React 19", "TypeScript", "Tailwind CSS", "Ant Design"] },
  { file: "backend", ext: "ts", items: ["NestJS", "Django REST", "TypeORM", "Node.js", "PostgreSQL", "SQL Server", "BigQuery"] },
  { file: "state-and-data", ext: "ts", items: ["TanStack Query", "RxJS", "Zustand", "Redux Toolkit", "WebSockets"] },
  {
    file: "cloud",
    ext: "yml",
    items: ["AWS S3", "Azure Blob", "Stripe", "PayPal", "SendGrid", "Google APIs", "Microsoft Graph", "Mux", "Vercel", "Railway"],
  },
  { file: "tools", ext: "json", items: ["Jest", "Vitest", "Git", "Jira", "Docker", "GitHub Actions", "Chart.js", "Recharts", "Zod", "Radix UI"] },
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
      "It started out as a broken project I had to revive: the third-party API integration didn't work, and the model's responses came back as messy, unstructured text. I fixed the integration and built a structured request/response format so the recipe output parses reliably every time. While I was in there, I found a prompt injection hole too. I closed it with layered defenses on both the client and the server: I validate input before it's sent, keep what the user types separate from the system instructions, and let the model itself sort real ingredients from junk before it's allowed to cook anything up.",
  },
  {
    slug: "whiteboard",
    fileHeader: "whiteboard/README.md",
    title: "Whiteboard",
    tagline: "Real-time collaborative canvas",
    description:
      "Pick a display name, spin up a board, send the link. Whoever opens it shows up live (cursor, name tag, colored avatar) and you're all drawing on the same canvas at once. Every stroke and edit syncs right away, undo/redo included, and the board's saved so it's still there next time you open it.",
    stack: ["Next.js", "Canvas API", "NestJS", "Socket.io", "PostgreSQL", "Redis"],
    codeUrl: "https://github.com/madbat95/whiteboard",
    demoUrl: "https://whiteboard-nu-one.vercel.app",
    noteSummary: "How it was actually built",
    noteBody:
      "I split this one across two AI agents working at the same time. One did the whole frontend, the other did the whole backend. Before either touched code, I wrote out a shared TypeScript contract covering every WebSocket event, payload, and route, so neither side had to guess what the other was doing. Each agent tested its own half before calling it done, then I did one final pass myself to make sure both sides actually lined up. Under the hood, the server holds the source of truth for event order and resyncs a client automatically if it falls behind, and presence runs through Redis pub/sub so it can scale across more than one backend instance.",
  },
  {
    slug: "nearby-business-finder",
    fileHeader: "business-finder/README.md",
    title: "Nearby Business Finder",
    tagline: "Geospatial search + automated outreach",
    description:
      "A full-stack geospatial search app built as a TypeScript monorepo: NestJS on the backend, Next.js and Leaflet on the frontend. Search results come from the Nominatim and Overpass APIs through a cached proxy layer, which kills the CORS issues and cuts down on redundant calls to services that rate-limit hard.",
    stack: ["TypeScript", "NestJS", "Next.js", "Leaflet", "n8n"],
    codeUrl: "https://github.com/madbat95/business-finder",
    demoUrl: "https://business-finder-backend.vercel.app",
    noteSummary: "The part that turned it into a lead-gen pipeline",
    noteBody:
      "I extended it past plain search: results get enriched with contact emails and business descriptions, there's a CSV export endpoint, and an n8n workflow handles automated cold outreach on top, with lead deduplication, send throttling, and CAN-SPAM/GDPR-compliant opt-outs built in.",
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
    roleLine: "Senior Software Engineer & Product Owner — Shispare",
    description:
      "An AI-powered LMS I'm building full-stack on Next.js, NestJS, and Postgres. I'm also the one sitting across from the client at every stage of it.",
  },
  {
    name: "FMCSA",
    roleLine: "Software Engineer — BitByteCyber",
    description:
      "Moved a legacy system over to an Angular-based CRM for the US trucking industry. It now serves thousands of customers and handles tens of thousands of visits a week.",
  },
  {
    name: "BOIFiling",
    roleLine: "Software Engineer — BitByteCyber",
    description:
      "A role-based CRM portal for a US company's BOI filing compliance process, with more permission logic than I'd like to admit.",
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
    description: "An event portal for hunting season, with notifications, real-time chat, the works.",
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
    role: "Senior Software Engineer — Full-Stack Developer & Product Owner",
    company: "Shispare",
    description:
      "Running point on Nebula Academy, an AI-powered LMS. I'm both the lead engineer and the client-facing Product Owner, so my day covers everything from sprint planning calls to actually shipping code. I lead a small team (one associate engineer, one intern, one QA) and make the final call on code review. On the stack itself: the Next.js/React frontend, the NestJS + TypeORM + Postgres backend, role-based dashboards, a Stripe-backed exam flow, and the Google Meet/Teams integrations. When dashboards started loading slowly, I traced it to every component firing its own API call and brought in Redux Toolkit for centralized state, which cut the duplicate requests and dropped load times by an estimated 30 to 40 percent. I also set up CI/CD with GitHub Actions, containerized our databases with Docker so the team isn't fighting environment drift, and deploy through Vercel and Railway.",
  },
  {
    hash: "#3",
    dateRange: "Jan 2023 — Aug 2025",
    role: "Software Engineer",
    company: "BitByteCyber",
    description:
      "Two and a half years building Angular apps for production clients. Multi-step forms that had to handle a lot of edge cases, real-time chat over WebSockets, permission systems with CASL, payment integrations wired straight into the frontend, and the odd Chrome extension or calendar dashboard along the way.",
  },
  {
    hash: "#2",
    dateRange: "Jul 2020 — Dec 2022",
    role: "Application Consultant / Software Engineer",
    company: "Makeen.io",
    description:
      "Implemented Makeen Transform, a drag-and-drop form builder that turns company paperwork into structured digital forms, across six client deployments. I built the custom connectors and lightweight scripts that pulled client data into those form workflows, and I was the only point of contact for meetings and requirements gathering on all six of them, from discovery through go-live.",
  },
  {
    hash: "#1",
    dateRange: "Dec 2019 — Jun 2020",
    role: "Business Intelligence Consultant",
    company: "Blutech Consulting",
    description:
      "My first real job. Built ETL pipelines and automated Power BI/SSRS regulatory reporting for HBL, one of Pakistan's largest banks, processing millions of rows of transactional data. I also built REST APIs with Django REST Framework and used OpenCV to automate NIC card data extraction for client onboarding.",
  },
];
