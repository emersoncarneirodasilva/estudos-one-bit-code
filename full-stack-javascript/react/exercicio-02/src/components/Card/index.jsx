import Button from "../Button";
import styles from "./Card.module.css";

// eslint-disable-next-line react/prop-types
function Card({ title, poster }) {
  return (
    <div className={styles.body}>
      <div className={styles.cardContainer}>
        <div className={styles.imgContainer}>
          <img src={poster} alt={title} />
        </div>

        <div className={styles.textContainer}>
          <h1>{title}</h1>
          <p>
            Um pôster decorativo épico do filme Star Wars, com moldura de MDF e
            tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de
            todos os tempos. Este clássico pôster trará aventura, nostalgia e a
            magia de Star Wars para qualquer lugar que você decidir pendurar.
            Não perca a chance de adicionar essa linda memória ao seu acervo!
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Card;
