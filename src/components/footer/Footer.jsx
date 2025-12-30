import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.question}>Questions? Call 000-800-040-1843</p>

      <div className={styles.links}>
        <a href="#">FAQ</a>
        <a href="#">Help Centre</a>
        <a href="#">Account</a>
        <a href="#">Media Centre</a>
        <a href="#">Investor Relations</a>
        <a href="#">Jobs</a>
        <a href="#">Ways to Watch</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Corporate Information</a>
        <a href="#">Contact Us</a>
      </div>

      <div className={styles.lang}>
        <select>
          <option>English</option>
          <option>தமிழ்</option>
        </select>
      </div>

      <p className={styles.copy}>Netflix India</p>
    </footer>
  );
}
