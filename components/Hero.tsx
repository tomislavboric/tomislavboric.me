import Image from "next/image";
import { email, profiles } from "@/data/profile";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.eyebrow}>Senior frontend engineer · Zagreb, Croatia · working remotely</p>
          <h1 id="hero-title">Hi, I&apos;m Tomislav. I build web products from the first sketch to production.</h1>
          <p className="lead">
            Seventeen years of frontend work. Five of them at an event-management SaaS, on the product and the
            growth side, and the last year building my own campsite-operations platform with Vue and Supabase.
            I care about interfaces people understand at a glance, and about code the next person can read.
          </p>
          <div className="actions">
            <a className="button button--primary" href="#work">
              See selected work
            </a>
            <a className="button" href={`mailto:${email}`}>
              Email me
            </a>
          </div>
          <ul className={styles.links} aria-label="Profiles">
            {profiles.map((profile) => (
              <li key={profile.href}>
                <a href={profile.href} rel="me noopener" target="_blank">
                  {profile.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <figure className={styles.portrait}>
          <Image
            src="/img/tomislav-boric-1000.webp"
            width={1000}
            height={1250}
            sizes="(min-width: 880px) 400px, 70vw"
            alt="Tomislav Borić standing in front of a terracotta wall, smiling."
            preload
            loading="eager"
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  );
}
