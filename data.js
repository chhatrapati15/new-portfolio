/**
 * ---------------------------------------------------------------
 * SITE CONTENT — edit anything in this file to update the portfolio.
 * No build step required, just save and refresh.
 * ---------------------------------------------------------------
 */

const SITE = {
  name: "Chhatrapati Chauhan",
  role: "Frontend Engineer",
  location: "Gurugram, India",
  email: "chhatrapati1511@gmail.com",
  phone: "+91 8279239833",
  socials: {
    github: "https://github.com/chhatrapati15",
    linkedin: "https://www.linkedin.com/in/chhatrapati15",
  },
  year: 2026,
};

// Hero stat callouts
const STATS = [
  { value: "3+", label: "years shipping" },
  { value: "90+", label: "lighthouse score" },
  { value: "500+", label: "bugs fixed" },
];

// Marquee / skills strip
const MARQUEE_ITEMS = [
  "React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS",
  "WebSocket", "Framer Motion", "Node.js", "GraphQL",
];

// Selected work / projects
const PROJECTS = [
  {
    name: "KwikEngage Chat Panel",
    year: "2026",
    desc: "Owned the real-time chat panel end-to-end across 5+ channels (WhatsApp, Email, Instagram, Facebook, Gmail) with reactions, link previews, and auto-reconnect WebSockets.",
    tags: ["React", "WebSocket", "Real-time"],
    link: "#",
  },
  {
    name: "DIY Bot Builder",
    year: "2026",
    desc: "Led a ground-up revamp of the drag-and-drop bot builder — flow listing, new breakers/actions, and an AI-powered chat summarizer with custom thread compression.",
    tags: ["React", "DnD", "AI Integration"],
    link: "#",
  },
  {
    name: "Squareboat.com",
    year: "2025",
    desc: "Led a multi-page corporate site rebuild. Structured metadata and semantic HTML lifted search visibility 60% and cut load time by 3+ seconds via lazy loading and font optimization.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    name: "Tofler.in",
    year: "2024",
    desc: "Engineered a high-performance SaaS UI from scratch with reusable components and a 10KB CSS bundle via modular SASS architecture.",
    tags: ["HTML5", "SASS/SCSS", "JavaScript"],
    link: "#",
  },
];

// Toolkit / skills groups
const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: "{ }",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SASS/SCSS",
      "JSON",
      "REST APIs",
    ],
  },
  {
    title: "Frameworks",
    icon: "⬡",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "React Query (TanStack Query)",
      "Tailwind CSS",
      "Bootstrap",
      "Express.js",
      "Node.js",
      "Handlebars",
    ],
  },
  {
    title: "Motion & UI",
    icon: "~",
    items: [
      "Framer Motion",
      "GSAP",
      "Radix UI",
      "Shadcn UI",
      "Material UI",
      "Ant Design",
      "Lottie",
      "Responsive Design",
      "CSS Animations",
      "Accessibility (a11y)",
    ],
  },
  {
    title: "Tooling",
    icon: "⌘",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "VS Code",
      "Vite",
      "Webpack",
      "npm",
      "Yarn",
      "pnpm",
      "Monaco Editor",
      "Chrome DevTools",
      "Postman",
      "Figma",
      "Firebase",
      "Vercel",
    ],
  },
];

// Experience timeline
const EXPERIENCE = [
  {
    period: "June 2026 — Present",
    role: "SDE-2 Frontend",
    company: "TrueFan",
    desc: "Worked on the TrueFan Studio product and the company website, developing responsive and scalable frontend features using React, Next.js, TypeScript, and Tailwind CSS. Built AI video generation workflows, integrated APIs, and optimized performance, SEO, and user experience while collaborating closely with cross-functional teams to deliver production-ready features.",
  },
  {
    period: "Dec 2025 — May 2026",
    role: "Software Development Engineer - 1",
    company: "GoKwik",
    desc: "Shipped 40+ production tickets across KwikEngage CMS — Chat Panel, DIY Bot Builder, AI Chat Summary, Workflow Automation, Knowledge Sources, and Billing. Resolved 5+ critical production incidents and rewrote the ESU session event listener.",
  },
  {
    period: "May 2024 — Dec 2025",
    role: "Frontend Engineer",
    company: "Squareboat Solutions Pvt Ltd",
    desc: "Built responsive React.js, Next.js, and TypeScript applications with Redux Toolkit and Axios REST integrations — lifting UX 40%, cutting data load time 35%, and achieving 90+ Lighthouse scores via code-splitting, memoization, and lazy loading.",
  },
  {
    period: "June 2023 — May 2024",
    role: "React JS Engineer",
    company: "JP Funware Technologies",
    desc: "Developed scalable React applications with Redux Toolkit, React Router, Ant Design, and Tailwind CSS using reusable component patterns and atomic design principles.",
  },
];

