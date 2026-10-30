"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties, type MouseEvent } from "react";
import type { Project, ProjectImage } from "@/data/projects";
import styles from "./WorkIndex.module.css";

// Must match the breakpoint in WorkIndex.module.css.
const DESKTOP = "(min-width: 960px)";

type Props = { projects: Project[] };

/**
 * A list of big project titles. On desktop the selected project's screenshots
 * and details sit large on the right. Hover or focus previews a project;
 * clicking a title locks it so hovering other titles no longer switches it,
 * and clicking it again unlocks. Arrows step through the project's screenshots.
 * On smaller screens every project shows its gallery and details under its title.
 */
export default function WorkIndex({ projects }: Props) {
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState<number | null>(null);

  return (
    <div className={styles.index} style={{ "--count": projects.length } as CSSProperties}>
      {projects.map((project, i) => {
        const isActive = i === active;
        const isLocked = i === locked;
        const panelId = `project-${project.slug}`;
        const preview = () => {
          if (locked === null) setActive(i);
        };
        // On desktop the panel is already beside the title, so don't jump to it.
        const onClick = (event: MouseEvent) => {
          if (!window.matchMedia(DESKTOP).matches) return;
          event.preventDefault();
          setActive(i);
          setLocked(isLocked ? null : i);
        };

        return (
          <div
            key={project.slug}
            className={styles.item}
            data-active={isActive || undefined}
            data-locked={isLocked || undefined}
            style={{ "--row": i + 1 } as CSSProperties}
          >
            <div className={styles.side}>
            <h3 className={styles.head}>
              <a
                href={`#${panelId}`}
                className={styles.title}
                aria-current={isActive ? "true" : undefined}
                aria-expanded={isLocked}
                onMouseEnter={preview}
                onFocus={preview}
                onClick={onClick}
              >
                <span className={styles.num} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.name}>{project.name}</span>
                {isLocked ? (
                  <svg className={styles.arrow} aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                  </svg>
                ) : (
                  <svg className={styles.arrow} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                )}
                <span className={styles.meta}>
                  {project.subtitle}
                  {isLocked && <span className={styles.hidden}> (locked, click again to unlock)</span>}
                </span>
              </a>
            </h3>
            {/* Desktop test: a clicked (locked) project opens its details under the title. */}
            <div className={styles.inline}>
              <div className={styles.inlineInner}>
                <Details project={project} />
              </div>
            </div>
            </div>

            <div id={panelId} className={styles.panel}>
              <Gallery name={project.name} images={project.images} active={isActive} />
              <div className={styles.body}>
                <Details project={project} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Role, tags, description and the remaining facts of one project. */
function Details({ project }: { project: Project }) {
  // The role is the heading; the other facts stay in the list.
  const role = project.facts.find((fact) => fact.label === "Role")?.value;
  const otherFacts = project.facts.filter((fact) => fact.label !== "Role");
  return (
    <>
      {role && <p className={styles.role}>{role}</p>}
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag.label} className={`tag ${tag.accent ? "tag--accent" : ""}`}>
            {tag.label}
          </span>
        ))}
      </div>
      {project.summary && <p className={styles.summary}>{project.summary}</p>}
      <p className={styles.description}>{project.description}</p>
      <dl className={styles.facts}>
        {otherFacts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}

/**
 * One project's screenshots, one at a time, with arrows when there are several.
 * Every screenshot sits in the same fixed-shape box, so the arrows below it
 * stay in place when switching.
 */
function Gallery({ name, images, active }: { name: string; images: ProjectImage[]; active: boolean }) {
  const [shot, setShot] = useState(0);
  const count = images.length;
  // Coming back to a project starts again from its first screenshot.
  useEffect(() => {
    if (!active) setShot(0);
  }, [active]);
  const step = (delta: number) => setShot((current) => (current + delta + count) % count);

  return (
    <figure className={styles.media}>
      <div className={styles.canvas}>
        {images.map((image, i) => (
          <div key={image.src} className={styles.frame} hidden={i !== shot}>
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              sizes="(min-width: 960px) 55vw, 90vw"
              alt={image.alt}
            />
          </div>
        ))}
      </div>

      {count > 1 && (
        <figcaption className={styles.bar}>
          <span className={styles.counter} aria-live="polite">
            {shot + 1} / {count}
          </span>
          <span className={styles.arrows}>
            <button type="button" className={styles.arrowButton} aria-label={`Previous ${name} screenshot`} onClick={() => step(-1)}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="M11 6l-6 6 6 6" />
              </svg>
            </button>
            <button type="button" className={styles.arrowButton} aria-label={`Next ${name} screenshot`} onClick={() => step(1)}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </button>
          </span>
        </figcaption>
      )}
    </figure>
  );
}
