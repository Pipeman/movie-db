import React from "react";

const MovieInput = ({ value, handleChange }) => (
  <div className="movie-input-copntainer">
    <label htmlFor="movie-name">Movie to search</label>
    <input
      id="movie-name"
      className="movie-input"
      type="text"
      placeholder={value}
      onChange={handleChange}
    />
  </div>
);

export default MovieInput;