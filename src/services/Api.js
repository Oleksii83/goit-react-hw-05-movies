const api = 'https://api.themoviedb.org/3/';
const key = 'aa3c597c43c8e27f94ec1708817abf2a';

const fethTrendingFilms = () => {
  return fetch(`${api}/trending/movie/day?api_key=${key}`).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
};

export default { fethTrendingFilms };
