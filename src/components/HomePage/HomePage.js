import { useState, useEffect } from 'react';
import * as Api from '../../services/Api';
import { NavLink, useLocation } from 'react-router-dom';

function HomePage() {
  const location = useLocation();

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
              <NavLink
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
}

export default HomePage;

//  ? movie.title : movie.name
