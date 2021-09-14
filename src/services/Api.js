const BASE_URL = 'https://api.themoviedb.org/3/';
const key = 'aa3c597c43c8e27f94ec1708817abf2a';

async function fetchMoviesApi(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('`There are no such movies`'));
}

export function fethTrendingMovies(page) {
  return fetchMoviesApi(`${BASE_URL}/trending/movie/day?api_key=${key}&page=${page}`);
}

export function fethSearchMovies(query) {
  return fetchMoviesApi(
    `${BASE_URL}search/movie?api_key=${key}&language=en-US&page=1&include_adult=false)&query=${query}`,
  );
}

// запрос полной информации о фильме для страницы кинофильма.
export function fethDetailsMovies(moviesData) {
  return fetchMoviesApi(`${BASE_URL}movie/${moviesData}?api_key=${key}&language=en-US)`);
}

// запрос информации о актёрском составе для страницы кинофильма.
export function fethActorsMovies(moviesId) {
  return fetchMoviesApi(
    `${BASE_URL}search/movie${moviesId}/credits?api_key=${key}&language=en-US)`,
  );
}

// запрос обзоров для страницы кинофильма.
export function fethReviewsMovies(moviesId) {
  return fetchMoviesApi(
    `${BASE_URL}search/movie${moviesId}/reviews/credits?api_key=${key}&language=en-US)`,
  );
}
