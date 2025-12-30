import { useState } from "react";
import styles from "./faqs.module.css";

const data = [
  {
    q: "What is Netflix?",
    a: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more."
  },
  {
    q: "How much does Netflix cost?",
    a: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device for one fixed monthly fee."
  },
  {
    q: "Where can I watch?",
    a: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web or on devices."
  },
  {
    q: "How do I cancel?",
    a: "Netflix is flexible. There are no annoying contracts and no commitments. You can cancel online anytime."
  },
  {
    q: "Is Netflix good for kids?",
    a: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies."
  }
];

export default function Faqs() {
  const [open, setOpen] = useState(null);

  return (
    <section className={styles.faqs}>
      <h2>Frequently Asked Questions</h2>

      <div className={styles.list}>
        {data.map((item, index) => (
          <div key={index} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => setOpen(open === index ? null : index)}
            >
              {item.q}
              <span>{open === index ? "✕" : "+"}</span>
            </button>

            {open === index && (
              <div className={styles.answer}>
                <p>{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
