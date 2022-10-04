import styles from "./ProfileDisplay.module.css";

export default function ProfileDisplay({ profile }) {
  const eachVote = profile.map((vote, i) => {
    const color = `mention_${vote}`;
    return <div key={i} className={`${styles.singleVote} ${styles[color]}`}></div>;
  });

  return (
    <div className={styles.container}>
      {eachVote}
      <div className={styles.median}></div>
    </div>
  );
}
