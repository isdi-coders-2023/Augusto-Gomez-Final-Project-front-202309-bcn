import { http, HttpResponse } from "msw";
import { moviesMock, modifiedMoviesMock } from "../moviesMocks";
import extendedMovieMocks from "../extendedMovieMocks";
import movieMock from "../movieMock";

const apiURL = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiURL}/movies`, () => HttpResponse.json({ movies: moviesMock })),

  http.delete(`${apiURL}/movies/65637a12d4b93a3787b660f7`, () =>
    HttpResponse.json({}),
  ),

  http.post(`${apiURL}/movies/create`, () =>
    HttpResponse.json({ movie: extendedMovieMocks[2] }),
  ),

  http.get(`${apiURL}/movies/${movieMock._id}`, () =>
    HttpResponse.json({ movie: movieMock }),
  ),

  http.patch(`${apiURL}/movies/65637a12d4b93a3787b660f7`, () =>
    HttpResponse.json({ movie: modifiedMoviesMock[0] }),
  ),
];
