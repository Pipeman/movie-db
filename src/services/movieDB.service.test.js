import movieDBService, { searchMovie } from "./movieDB.service";
import { API_KEY } from "../config/config";

const mockedValue = JSON.stringify({ data: "This is a mocked response"});

beforeEach(() => {
  fetch.resetMocks();
  fetch.mockResponse(mockedValue);
})

it("should be defined", () => {
  expect(movieDBService).toBeDefined();
});

it("should call the right API endpoint", async () => {
  const searchedMovie = "cane";
  const requestedPage = 3;
  await searchMovie(searchedMovie, requestedPage);

  expect(fetch).toHaveBeenCalledWith(
    `http://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchedMovie}&page=${requestedPage}`
  );
});

describe("when page is not passed as an argument", () => {

  it("should default to one", async () => {
    const searchedMovie = "cane";
    await searchMovie(searchedMovie);

    expect(fetch).toHaveBeenCalledWith(
      `http://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchedMovie}&page=1`
    );
  });
});

it("should call json function and return its result", async () => {
  const data = await searchMovie("cane");
  expect(data).toEqual(JSON.parse(mockedValue));
});