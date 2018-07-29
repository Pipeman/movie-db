import React, { Component } from "react";
import MovieInput from "../MovieInput/MovieInput";

class FormContainer extends Component {

  constructor() {
    super();

    this.state = {
      searchedMovie: "",
    }
    
    this.setMovieTitleHandler = this.setMovieTitleHandler.bind(this);
  }

  setMovieTitleHandler(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    return (
      <form id="movie-search">
        <MovieInput
          value={this.state.searchedMovie}
          handleChange={this.setMovieTitleHandler}
        />
      </form>
    );
  }
}

export default FormContainer;