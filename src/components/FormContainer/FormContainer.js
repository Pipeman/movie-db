import React, { Component } from "react";
import MovieInput from "../MovieInput/MovieInput";
import FilmCard from "../FilmCard/FilmCard";
import { searchMovie } from "../../services/movieDB.service";

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
      <form>
        <MovieInput
          handleChange={this.setSearchedMovieHandler}
        />
        {
          this.state.foundMovies.map(film => <FilmCard info={film} key={film.id} />)
        }
      </form>
    );
  }
}

export default FormContainer;