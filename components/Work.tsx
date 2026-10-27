import { featuredProject, projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Work.module.css";

export default function Work() {
  return (
    <section className={styles.work} id="work" aria-labelledby="work-title">
      <div className="container">
        <header className="section-head">
          <h2 id="work-title" className="section-title">
            Selected work
          </h2>
          <p>
            Four projects that show how I work: one I own end to end, one for a client, one inside a product team,
            and one small thing I built for my friends.
          </p>
        </header>

        <ProjectCard project={featuredProject} featured />

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <p className={styles.more}>
          Also on the record: more than twenty custom WordPress builds for clients (membership, e-commerce, booking),
          the front end of a Laravel bookshop and of an auction marketplace, and a tested MemberPress pricing plugin.
          Happy to walk through any of them.
        </p>
      </div>
    </section>
  );
}
