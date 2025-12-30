import styles from "./upper.module.css";
import Curve from "../curve/Curve";

export default function Upper() {
  return (
    <section className={styles.Upper}>
      {/* NAVBAR */}
      <nav className={styles.navBar}>
        <div className={styles.navBrand}>
          <img
            src="/netflix-svgs/Netflix_2015_logo.svg"
            alt="Netflix"
          />
        </div>

        <div className={styles.navLinks}>
          <div className={styles.languagesBox}>
            <img
              src="/select-box/translate.svg"
              className={styles.translateImage}
              alt="translate"
            />

            <select className={styles.selectBox}>
              <option>English</option>
              <option>हिन्दी</option>
            </select>
          </div>

          <button className={styles.SubmitBtn}>Sign In</button>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className={styles.mainDiv}>
        <h2>Unlimited movies, TV shows and more</h2>
        <p className={styles.price}>Starts at ₹149. Cancel anytime.</p>
        <p className={styles.create}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className={styles.startPlanBox}>
          <input type="email" placeholder="Email address" />
          <button className={styles.getStartedBtn}>Get Started</button>
        </div>
      </div>

      {/* CURVE */}
      <Curve />
    </section>
  );
}
