import styles from "./LoadingCircle.module.css";

const LoadingCircle = () => {
  return (
    <>
      <div className={styles["loading-wrapper"]}>
        <span className={styles["loading-before"]} />
        <span className={styles.loading} />
        <span className={styles["loading-after"]} />
      </div>
    </>
  );
};

export default LoadingCircle;
