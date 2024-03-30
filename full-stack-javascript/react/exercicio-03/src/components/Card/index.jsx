/* eslint-disable react/prop-types */
import styles from "./Card.module.css";
import Button from "../Button";
import { useState } from "react";

function Card({ ...props }) {
  const [followText, setFollowText] = useState("Follow");

  function handleClick() {
    if (followText === "Follow") {
      alert("Você agora está seguindo!");
      setFollowText("Following");
    } else {
      alert("Você agora deixou de seguir!");
      setFollowText("Follow");
    }
  }

  return (
    <main className={styles.mainContainer}>
      <div className={styles.cardContainer}>
        <img src={props.profileImg} alt={props.name} />
        <h2>
          {props.name}
          <button className={styles.btnFollow} onClick={handleClick}>
            {followText}
          </button>
        </h2>
        <hr />
        <p>{props.description}</p>
        <hr />
        <p>{props.tel}</p>
        <hr />
        <p>{props.email}</p>
        <hr />
        <Button btnLink={props.linkGitHub}>GitHub</Button>

        <Button btnLink={props.linkLinkedIn}>LinkedIn</Button>

        <Button btnLink={props.linkPortfolio}>Portfólio</Button>
      </div>
    </main>
  );
}

export default Card;
