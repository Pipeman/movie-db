import React from "react";
import { IMAGE_BASE_URL } from "../../config/config";

const FilmCard = ({ info }) => (
  <div className="movie-card-copntainer">
    <header>
      <h1>{info.title}</h1>
      <span>{info.vote_average} over {info.vote_count} votes</span>
    </header>
    
    <img src={IMAGE_BASE_URL + info.poster_path}/>
  </div>
);

export default FilmCard;