/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

function Comment({ email, date, text, onRemoveComments }) {
  return (
    <div className={styles.commentContainer}>
      <p className={styles.email}>{email}</p>
      <p className={styles.data}>Em {date}</p>
      <p className={styles.comments}>{text}</p>
      <button onClick={onRemoveComments}>Remover Comentário</button>
    </div>
  );
}

export default Comment;
