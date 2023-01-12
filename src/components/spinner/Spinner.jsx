import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinnerAnimationContainer}>
        <div />
      </div>
    </div>
  );
}

export default Spinner;
