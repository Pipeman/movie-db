import { MOVIE_SEARCH_URL } from "../config/config";

export function searchMovie(movieTitle, pageNumber = 1) {
  return fetch(`${MOVIE_SEARCH_URL}&query=${movieTitle}&page=${pageNumber}`)
    .then(response => response.json())
    .catch((e) => console.error(e));
}

export default function movieDBService() {
  return {
    searchMovie,
  };
};