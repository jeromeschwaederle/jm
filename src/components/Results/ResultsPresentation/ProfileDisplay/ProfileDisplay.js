import styles from "./ProfileDisplay.module.css";

export default function ProfileDisplay({ profile }) {
  const eachVote = profile.map(vote => {
    const color = `mention_${vote}`;
    return <div className={`${styles.singleVote} ${styles[color]}`}></div>;
  });

  return (
    <div className={styles.container}>
      {eachVote}
      <div className={styles.median}></div>
    </div>
  );
}
