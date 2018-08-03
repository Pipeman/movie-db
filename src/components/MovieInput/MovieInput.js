import React from "react";
import styles from "./MovieInput.css"

const MovieInput = ({ handleChange }) => (
  <div className={styles["movie-input-container"]}>
    <input
      id="movie-name"
      className={styles["movie-input"]}
      type="text"
      placeholder="Movie to search"
      onChange={handleChange}
    />
  </div>
);

export default MovieInput;