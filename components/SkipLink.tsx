import styles from "./SkipLink.module.css";

export default function SkipLink() {
  return (
    <a className={styles.skipLink} href="#work">
      Skip to selected work
    </a>
  );
}
