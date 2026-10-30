import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© 2026 Tomislav Borić. Built with Next.js.</p>
      </div>
    </footer>
  );
}
