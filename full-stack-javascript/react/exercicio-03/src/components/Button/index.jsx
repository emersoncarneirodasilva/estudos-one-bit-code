import styles from "./Button.module.css";

// eslint-disable-next-line react/prop-types
function Button({ children, btnLink }) {
  return (
    <button className={styles.btn}>
      <a href={btnLink} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </button>
  );
}

export default Button;
