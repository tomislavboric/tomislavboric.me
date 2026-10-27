import Image from "next/image";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({ project, featured = false }: Props) {
  const { title, image, tags, summary, description, facts } = project;

  return (
    <article className={`${styles.project} ${featured ? styles.featured : styles.compact}`}>
      <figure className={styles.media}>
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          sizes={
            featured
              ? "(min-width: 1184px) 1120px, calc(100vw - 32px)"
              : "(min-width: 1000px) 360px, (min-width: 720px) 50vw, 100vw"
          }
          alt={image.alt}
        />
      </figure>
      <div className={styles.body}>
        <div className={styles.meta}>
          {tags.map((tag) => (
            <span key={tag.label} className={`${styles.tag} ${tag.accent ? styles.tagAccent : ""}`}>
              {tag.label}
            </span>
          ))}
        </div>
        <h3>{title}</h3>
        {summary && <p className={styles.summary}>{summary}</p>}
        <p>{description}</p>
        <dl className={styles.facts}>
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
