import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import * as Api from '../../services/Api';
import Cast from '../Cast/Cast';

import Reviews from '../Reviews/Reviews';

export default function MovieDetailsPage() {
  const match = useRouteMatch();
  console.log('🚀 ~ file: MovieDetailsPage.js ~ line 10 ~ MovieDetailsPage ~ match', match);
  const { moviesId } = useParams();

  const [movie, setMovie] = useState('');
  useEffect(() => {
    Api.fethDetailsMovies(moviesId)
      .then(setMovie)
      .catch(error => error.massage);
  }, [moviesId]);

  return (
    <>
      <h1>{`Movie ${moviesId}`}</h1>

      {movie && (
        <>
          <h1>{movie.title}</h1>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
          <p>User Score: {movie.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </>
      )}

      {movie && (
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to="{`${url}/${genre.id}`}" className="" activeClassName="">
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="/reviews" className="" activeClassName="">
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      <hr />

      <Route path="/movies/:moviesId">
        <Cast />
      </Route>
    </>
  );
}
