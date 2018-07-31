import React from "react";

const MovieInput = ({ value, handleChange }) => (
  <div className="movie-input-copntainer">
    <input
      id="movie-name"
      className="movie-input"
      type="text"
      placeholder="Movie to search"
      onChange={handleChange}
    />
  </div>
);

export default MovieInput;