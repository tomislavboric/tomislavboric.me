import Image from "next/image";
import { email, profiles } from "@/data/profile";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.eyebrow}>Zagreb, Croatia · Remote</p>
          <h1 id="hero-title">Hi, I&rsquo;m Tomislav. I build digital products that are clear, useful and easy to use.</h1>
          <p className="lead">
            I&rsquo;m a Senior Frontend Engineer with 17+ years of experience, combining product thinking with strong
            UI execution. I&rsquo;ve worked on SaaS products used at global scale and built my own product from the
            ground up.
          </p>
          <p className="lead">
            I care about the details people notice when they use a product &mdash; how it looks, how it behaves, how
            easy it is to understand, and whether it feels properly finished.
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
            sizes="(min-width: 880px) 30vw, 70vw"
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
