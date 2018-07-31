export const API_KEY = "2fad4d6d6ff263a20af7f8f4fc16b980";
export const API_KEY_QUERY_PARAM = `api_key=${API_KEY}`;
export const LANGUAGE_QUERY_PARAM = "language=en-US";
export const API_VERSION = 3;
export const BASE_MOVIE_DB_URL = "http://api.themoviedb.org/";
export const MOVIE_DB_URL_VERSION = BASE_MOVIE_DB_URL + API_VERSION;
export const MOVIE_SEARCH_URL = `${MOVIE_DB_URL_VERSION}/search/movie?${API_KEY_QUERY_PARAM}`;
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";

const config = {
    API_KEY,
    API_KEY_QUERY_PARAM,
    LANGUAGE_QUERY_PARAM,
    API_VERSION,
    BASE_MOVIE_DB_URL,
    MOVIE_DB_URL_VERSION,
    MOVIE_SEARCH_URL,
    IMAGE_BASE_URL,
};

export default config; 