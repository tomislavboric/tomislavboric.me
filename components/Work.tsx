import { projects } from "@/data/projects";
import WorkIndex from "./WorkIndex";
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
            Five projects that show how I work: one I own end to end, two for clients, one inside a product team,
            and one small thing I built for my friends.
          </p>
        </header>

        <WorkIndex projects={projects} />

        <p className={styles.more}>
          Also on the record: more than twenty custom WordPress builds for clients (membership, e-commerce, booking),
          the front end of an auction marketplace, and a tested MemberPress pricing plugin.
          Happy to walk through any of them.
        </p>
      </div>
    </section>
  );
}
