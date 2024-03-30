import styles from "./app.module.css";
import Comment from "./components/Comment";
import Form from "./components/Form";
import useComments from "./hooks/useComments";

function App() {
  const { comments, addComments, removeComments } = useComments();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <h2>Seção de Comentários</h2>

        <Form addComments={addComments} />

        {comments.length > 0 ? (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              email={comment.email}
              text={comment.text}
              date={comment.date}
              onRemoveComments={() => removeComments(comment.id)}
            />
          ))
        ) : (
          <div>
            <p>Seja o primeiro a comentar!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
