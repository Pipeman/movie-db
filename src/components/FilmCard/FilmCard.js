import React from "react";
import { IMAGE_BASE_URL } from "../../config/config";
import styles from "./FilmCard.css"

const FilmCard = ({ info }) => (
  <div className={styles["movie-card-container"]}>
    {info.poster_path
      ? <img className={styles["poster"]} src={IMAGE_BASE_URL + info.poster_path}/>
      : <div className={styles["poster-not-available"]}></div>}
    <header>
      <h1>{info.title}</h1>
      <span>{info.vote_average} over {info.vote_count} votes</span>
    </header>
  </div>
);

export default FilmCard;