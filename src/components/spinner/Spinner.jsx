import styles from "./Spinner.module.css";

function Spinner({ size = "40px", color = "rgb(39, 39, 158)", ...props }) {
  return (
    <div
      className={styles.spinner}
      style={{
        "--spinner-size": size,
        "--spinner-color": color,
      }}
      {...props}
    >
      <div className={styles.spinnerAnimationContainer}>
        <div />
      </div>
    </div>
  );
}

export default Spinner;
