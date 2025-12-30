import styles from "./reasons.module.css";

export default function Reasons() {
  return (
    <section className={styles.reasons}>
      <h2 className={styles.heading}>More reasons to join</h2>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Enjoy on your TV</h3>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            Blu-ray players and more.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Download to watch offline</h3>
          <p>
            Save your favourites easily and always have something to watch.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Watch everywhere</h3>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Create profiles for kids</h3>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them.
          </p>
        </div>
      </div>
    </section>
  );
}
