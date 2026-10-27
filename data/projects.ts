export type Project = {
  slug: string;
  title: string;
  image: { src: string; width: number; height: number; alt: string };
  tags: { label: string; accent?: boolean }[];
  /** Short muted intro, shown only on the featured project. */
  summary?: string;
  description: string;
  facts: { label: string; value: string }[];
};

export const featuredProject: Project = {
  slug: "camppy",
  title: "Camppy — campsite operations SaaS",
  image: {
    src: "/img/camppy-today-dashboard-1440.webp",
    width: 1440,
    height: 967,
    alt: "Camppy Today dashboard: guest-ready progress, time until check-in, a unit preparation plan with turnover, departure and arrival statuses per team, technical interventions and teams' progress for the day.",
  },
  tags: [{ label: "Own product", accent: true }, { label: "Deployed, pilot stage" }, { label: "2025 – 2026" }],
  summary:
    "Turns imported bookings into cleaning schedules and a clear day of work for field teams, with role-based views for managers, cleaners and unit owners.",
  description:
    "I designed and built the whole thing: the data model and row-level security in Postgres, the booking import from Booking.com and Airbnb calendars, a scheduling board where changes are planned first and saved as one batch, an offline queue for phones with bad reception, and a twelve-language interface. It runs as a PWA so cleaners use it from their pocket.",
  facts: [
    { label: "Role", value: "Founder, designer, developer" },
    { label: "Stack", value: "Vue 3, Pinia, Supabase (Postgres, RLS, Realtime), Vercel functions, PWA, Vitest" },
  ],
};

export const projects: Project[] = [
  {
    slug: "move-by-erika",
    title: "Move by Erika — headless fitness membership platform",
    image: {
      src: "/img/move-by-erika-homepage-1440.webp",
      width: 1440,
      height: 1000,
      alt: "Move by Erika homepage: navigation, the headline 'Snaga koja se osjeti', a short intro with two buttons, and a large photo of the trainer stretching in the studio.",
    },
    tags: [{ label: "Client", accent: true }, { label: "Pre-launch" }, { label: "2026" }],
    description:
      "A Next.js front end over WordPress content, with Supabase accounts and Stripe subscriptions for an online training studio. Editors keep Gutenberg; members get a paid video library and a seven-step nutrition questionnaire validated on both client and server. Next and WordPress talk through signed requests, so there is no shared login to leak.",
    facts: [
      { label: "Role", value: "Sole developer, through my studio inWeb" },
      { label: "Stack", value: "Next.js 16, React 19, WPGraphQL, custom WP plugins, Supabase Auth, Stripe, Vercel" },
    ],
  },
  {
    slug: "sched",
    title: "Sched — product UI in an event-management SaaS",
    image: {
      src: "/img/sched-pd-hours-1440.webp",
      width: 1440,
      height: 962,
      alt: "Sched organiser control panel, PD Hours page: a dark side navigation, a year-round learning catalog with CEU credits per session, and a seven-step compliance workflow from import to certificates and reports.",
    },
    tags: [{ label: "Product team", accent: true }, { label: "In production" }, { label: "2020 – 2026" }],
    description:
      "Five years on the organiser control panel and the marketing site of an established event platform. Onboarding checklist with progress, empty states driven by the CMS, a collapsible side navigation, ticket setup with a live preview, an accessibility pass across buttons and focus, and the A/B testing setup for the growth team.",
    facts: [
      { label: "Role", value: "Frontend engineer, product and growth teams" },
      { label: "Stack", value: "PHP templates, SCSS, jQuery, Vue form builder, WordPress, ACF, Amplitude" },
    ],
  },
  {
    slug: "fuca-termini",
    title: "Fuca termini — five-a-side football organiser",
    image: {
      src: "/img/fuca-termini-phones-1440.webp",
      width: 1440,
      height: 1080,
      alt: "Two phone screens of Fuca termini: the session card with sign-up buttons, a waitlist badge and a capacity bar, and the Teams tab with two balanced ten-player teams.",
    },
    tags: [{ label: "Side project", accent: true }, { label: "In progress" }, { label: "2026" }],
    description:
      "A mobile-first React app replacing the spreadsheet my football group used for sign-ups, waitlist, teams, results and the cash box. Players log in with a phone number and PIN, the waitlist is derived in the database so it can never drift, and a small balancer builds fair teams that respect who wants to play together.",
    facts: [
      { label: "Role", value: "Sole developer" },
      { label: "Stack", value: "React 19, TanStack Query, Supabase (RLS, RPC, edge functions), SQL-tested flows" },
    ],
  },
];
