import React, { Component } from "react";
import MovieInput from "../MovieInput/MovieInput";
import FilmCard from "../FilmCard/FilmCard";
import { searchMovie } from "../../services/movieDB.service";
import styles from "./FormContainer.css";

class FormContainer extends Component {

  constructor() {
    super();

    this.state = {
      searchedMovie: "",
      foundMovies: [],
    }
    
    this.setSearchedMovieHandler = this.setSearchedMovieHandler.bind(this);
  }

  setSearchedMovieHandler(event) {
    this.setState({
      "searchedMovie": event.target.value,
    });
    
    if (event.target.value !== "") {
      this.fetchSearchedMovies(event.target.value);
    }
  }

  async fetchSearchedMovies(searchedMovie) {
    const foundMovies = await searchMovie(searchedMovie);
    this.setState({
      foundMovies: foundMovies.results,
    });
  }

  render() {
    return (
      <form className={styles["form-container"]}>
        <MovieInput
          handleChange={this.setSearchedMovieHandler}
        />
        <div className={styles["cards-container"]}>
          { this.state.foundMovies.map(film => <FilmCard info={film} key={film.id} />) }
        </div>
      </form>
    );
  }
}

export default FormContainer;