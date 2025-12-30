import styles from "./trendingShows.module.css";

const shows = [
  {
    id: 1,
    title: "Money Heist",
    img: "https://image.tmdb.org/t/p/w300/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
  },
  {
    id: 2,
    title: "Stranger Things",
    img: "https://image.tmdb.org/t/p/w300/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
  },
  {
    id: 3,
    title: "The Witcher",
    img: "https://image.tmdb.org/t/p/w300/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
  },
  {
    id: 4,
    title: "Wednesday",
    img: "https://image.tmdb.org/t/p/w300/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
  },
  {
    id: 5,
    title: "Dark",
    img: "https://image.tmdb.org/t/p/w300/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
  },
  {
    id: 6,
    title: "Breaking Bad",
    img: "https://image.tmdb.org/t/p/w300/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
  },
  {
    id: 7,
    title: "Peaky Blinders",
    img: "https://image.tmdb.org/t/p/w300/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg",
  },
  {
    id: 8,
    title: "Narcos",
    img: "https://image.tmdb.org/t/p/w300/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
  },
  {
    id: 9,
    title: "Lupin",
    img: "https://image.tmdb.org/t/p/w300/sgxawbFB5Vi5OkPWQLNfl3dvkNJ.jpg",
  },
  {
    id: 10,
    title: "The Crown",
    img: "https://image.tmdb.org/t/p/w300/el2ap6lvjcEDdbyJoB3oKiYgXu9.jpg",
  },
];

export default function TrendingShows() {
  return (
    <section className={styles.trending}>
      <h2 className={styles.heading}>Trending Now</h2>

      <div className={styles.row}>
        {shows.map(show => (
          <div key={show.id} className={styles.card}>
            <img src={show.img} alt={show.title} />
            <p>{show.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
