import styles from "./About.module.css";

const expectations = [
  "Clear, jargon-free communication with design, support and engineering.",
  "Ownership from the first idea to the deploy, including the boring parts.",
  "A performance and accessibility mindset by default, not as a phase.",
  "Honest estimates and honest status updates.",
];

const tools = [
  "Vue and Nuxt",
  "React and Next.js",
  "TypeScript",
  "Supabase and Postgres",
  "PHP and WordPress",
  "SCSS",
  "Vitest",
  "Vercel",
  "Figma",
];

export default function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <div className={`container ${styles.inner}`}>
        <header className={`section-head ${styles.head}`}>
          <h2 id="about-title" className="section-title">
            About
          </h2>
        </header>
        <div className={styles.text}>
          <p>
            I started in 2009 as a freelancer, building websites for small businesses in Zagreb. In 2015 that became
            inWeb, my own studio, and a long run of WordPress builds: themes from scratch, WooCommerce shops, membership
            sites, page builders editors could actually use.
          </p>
          <p>
            In 2020 I joined Sched, a SaaS for event organisers, first on the marketing site and growth experiments,
            then in the product team working on the control panel. That is where marketing-site habits turned into
            product habits: states, roles, edge cases, and the patience to make a legacy codebase a little better
            with every change.
          </p>
          <p>
            Camppy is what I do with that experience when nobody hands me a spec. I designed the product, built it and
            run it. It taught me more about data modelling, security rules and operations than any client project
            could.
          </p>
          <p>I use AI tools every day and say so. The architecture, the decisions and the bugs are still mine.</p>
        </div>
        <aside className={styles.side}>
          <h3>What you can expect</h3>
          <ul className={styles.checklist}>
            {expectations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Tools I reach for</h3>
          <p className={styles.tools}>{tools.join(" · ")}</p>
        </aside>
      </div>
    </section>
  );
}
