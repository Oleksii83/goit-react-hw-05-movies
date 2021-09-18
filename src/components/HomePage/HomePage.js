import { useState, useEffect } from 'react';
import * as Api from '../../services/Api';
import { Link } from 'react-router-dom';

function HomePage() {
  const [page, SetPage] = useState(1);
  const [movies, setMovies] = useState([]);

  // const url = useRouteMatch;

  useEffect(() => {
    Api.fethTrendingMovies(page)
      .then(moviesData => {
        setMovies(movies => [...movies, ...moviesData.results]);
      })
      .catch(error => error.massage);
  }, [page]);

  return (
    <>
      <h1>Trending today </h1>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default HomePage;

//  ? movie.title : movie.name
