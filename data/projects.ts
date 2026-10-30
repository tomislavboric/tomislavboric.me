export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Project = {
  slug: string;
  /** Short project name, shown as the big clickable title. */
  name: string;
  /** One line on what the project is. */
  subtitle: string;
  /** Screenshots for the gallery, in order; made at 1440 × 1000 (or 2×) to fill its frame. */
  images: ProjectImage[];
  tags: { label: string; accent?: boolean }[];
  /** Optional extra intro line, shown above the description. */
  summary?: string;
  description: string;
  facts: { label: string; value: string }[];
};

const camppy: Project = {
  slug: "camppy",
  name: "Camppy",
  subtitle: "Campsite operations SaaS",
  images: [
    {
      src: "/img/camppy-today-dashboard-2560.webp",
      width: 2560,
      height: 1778,
      alt: "Camppy Today dashboard for Camp Adriatic: 2 of 8 units done with a count per status, three arrivals at risk, 3 hr 40 min until check-in at 15:00, the unit preparation plan with prep status and team per unit, teams' progress for the day and recent activity.",
    },
    {
      src: "/img/camppy-board-phone-2880.webp",
      width: 2880,
      height: 2000,
      alt: "Camppy cleaning schedule next to a cleaner's phone. The schedule shows Team A and Team B on a timeline with check-out at 10:00 and check-in at 15:00, cards that are done, being cleaned, awaiting a check, sent back or blocked, and one unit unassigned. The phone shows the cleaner's day: the cleaning in progress, the next arrival preparation and one cleaning completed.",
    },
  ],
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
  camppy,
  {
    slug: "move-by-erika",
    name: "Move by Erika",
    subtitle: "Fitness membership platform",
    images: [
      {
        src: "/img/move-by-erika-homepage-2880.webp",
        width: 2880,
        height: 2000,
        alt: "Move by Erika homepage: navigation, the headline 'Snaga koja se osjeti', a short intro with two buttons, and a large photo of the trainer stretching in the studio.",
      },
      {
        src: "/img/move-by-erika-member-home-2880.webp",
        width: 2880,
        height: 2000,
        alt: "Move by Erika member home: a greeting, a 'continue where you left off' card for workout 4 in week 2 of Move Start with progress 3 of 8, and the member's programmes, one active and three locked behind Premium.",
      },
      {
        src: "/img/move-by-erika-library-2880.webp",
        width: 2880,
        height: 2000,
        alt: "Move Library: a featured Kettlebell Foundations workout with start and save buttons, a search field, filters by category and level, and the first workout cards.",
      },
      {
        src: "/img/move-by-erika-pricing-2880.webp",
        width: 2880,
        height: 2000,
        alt: "Move by Erika pricing: a monthly and quarterly switch, the Standard plan at 29 € a month for one programme and the Premium plan at 49 € a month for all programmes, each with its list of features.",
      },
    ],
    tags: [{ label: "Client", accent: true }, { label: "Pre-launch" }, { label: "2026" }],
    description:
      "A Next.js front end over WordPress content, with Supabase accounts and Stripe subscriptions for an online training studio. Editors keep Gutenberg; members get a paid video library and a seven-step nutrition questionnaire validated on both client and server. Next and WordPress talk through signed requests, so there is no shared login to leak.",
    facts: [
      { label: "Role", value: "Sole developer, through my studio inWeb" },
      { label: "Stack", value: "Next.js 16, React 19, WPGraphQL, custom WP plugins, Supabase Auth, Stripe, Vercel" },
    ],
  },
  {
    slug: "alfa",
    name: "Alfa",
    subtitle: "Online bookshop for a Croatian publisher",
    images: [
      {
        src: "/img/alfa-homepage-top-1440.webp",
        width: 1440,
        height: 1000,
        alt: "Alfa homepage from the top: header with the Alfa logo, book categories, offers, search, favourites and cart; a back-to-school hero with a 50% discount next to the bestseller of the month with old and new price; and three benefits: 50 years, free delivery, discounts.",
      },
      {
        src: "/img/alfa-category-prototype-1440.webp",
        width: 1440,
        height: 1000,
        alt: "Alfa bookshop prototype, the 'Školski program' category: header with the Alfa logo, book categories, search and cart, a sidebar with filters by book type and school subject, and a grid of book covers with discounts and prices in euros.",
      },
      {
        src: "/img/alfa-cart-2880.webp",
        width: 2880,
        height: 2000,
        alt: "Alfa cart: three books with cover, author, unit price, quantity buttons and line total, and a cart summary with a promo code field, subtotal, delivery, discount, total and a button to continue to payment.",
      },
      {
        src: "/img/alfa-checkout-2880.webp",
        width: 2880,
        height: 2000,
        alt: "Alfa checkout, step one of four: a stepper for buyer details, delivery address, delivery method and payment, the buyer details form, and an order summary with the three books and totals.",
      },
    ],
    tags: [{ label: "Client", accent: true }],
    description:
      "I built the whole storefront as a working static prototype first: home with a hero slider and bestsellers, a mega menu, category pages filtered by school subject and book type, the book page, cart, a four-step checkout, account, favourites and a blog. Then I moved those templates into the Laravel Blade views while another developer built the backend for orders, receipts and delivery.",
    facts: [
      { label: "Role", value: "Designer and front-end developer" },
      { label: "Stack", value: "Foundation 6, SCSS, Handlebars (Panini), Gulp, Swiper, Laravel Blade" },
    ],
  },
  {
    slug: "sched",
    name: "Sched",
    subtitle: "Product UI in an event-management SaaS",
    images: [
      {
        src: "/img/sched-pd-hours-1440.webp",
        width: 1440,
        height: 962,
        alt: "Sched organiser control panel, PD Hours page: a dark side navigation, a year-round learning catalog with CEU credits per session, and a seven-step compliance workflow from import to certificates and reports.",
      },
      {
        src: "/img/sched-registration-builder-local-demo-1440.webp",
        width: 1440,
        height: 1600,
        alt: "Sched registration form builder, step two of three: a stepper on the left and draggable question cards for a choice question, first name, last name, email and an ID file upload.",
      },
    ],
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
    name: "Fuca termini",
    subtitle: "Five-a-side football organiser",
    images: [
      {
        src: "/img/fuca-termini-session-teams-2880.webp",
        width: 2880,
        height: 2000,
        alt: "Two Fuca termini screens: the next session with date, time, place and price, buttons to say you're coming or not, and how full it is with 20 of 20 places taken; and the two teams, Bijeli and Plavi, ten players each.",
      },
      {
        src: "/img/fuca-termini-results-stats-2880.webp",
        width: 2880,
        height: 2000,
        alt: "Two Fuca termini screens: the season's matches with scores and scorers, one still waiting for a result, and the standings with points, goal difference and goals plus assists per player.",
      },
      {
        src: "/img/fuca-termini-result-cashbox-2880.webp",
        width: 2880,
        height: 2000,
        alt: "Two Fuca termini screens: after the match the session card asks for the result, and the cash box shows the balance, the expected balance after the session and payments confirmed per player.",
      },
    ],
    tags: [{ label: "Side project", accent: true }, { label: "In progress" }, { label: "2026" }],
    description:
      "A mobile-first React app replacing the spreadsheet my football group used for sign-ups, waitlist, teams, results and the cash box. Players log in with a phone number and PIN, the waitlist is derived in the database so it can never drift, and a small balancer builds fair teams that respect who wants to play together.",
    facts: [
      { label: "Role", value: "Sole developer" },
      { label: "Stack", value: "React 19, TanStack Query, Supabase (RLS, RPC, edge functions), SQL-tested flows" },
    ],
  },
];
