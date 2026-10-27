import { email, profiles } from "@/data/profile";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="section-title">
          Let&apos;s talk
        </h2>
        <p className="lead">
          I&apos;m open to senior frontend and full-stack roles in remote, international teams. The fastest way to
          reach me is email.
        </p>
        <div className={`actions ${styles.actions}`}>
          <a className="button button--primary" href={`mailto:${email}`}>
            {email}
          </a>
          {profiles.map((profile) => (
            <a key={profile.href} className="button" href={profile.href} rel="me noopener" target="_blank">
              {profile.label}
            </a>
          ))}
        </div>
        <p className={styles.note}>Based in Zagreb, Croatia (CET). Five years of working remotely with a US-based team.</p>
      </div>
    </section>
  );
}
