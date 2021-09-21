import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import * as Api from '../../services/Api';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { url, path } = useRouteMatch();

  const { moviesId } = useParams();

  const [movie, setMovie] = useState('');

  useEffect(() => {
    Api.fethDetailsMovies(moviesId)
      .then(setMovie)
      .catch(error => error.massage);
  }, []);

  return (
    <>
      {/* <h1>{`Movie ${moviesId}`}</h1> */}

      {movie && (
        <section>
          <div className={s.sectionMovie}>
            <div>
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className={s.overviewMovie}>
              <h1>{movie.title}</h1>
              <p>User Score: {movie.vote_average * 10}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
        </section>
      )}

      {movie && (
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to={`${url}/cast`} className="" activeClassName="">
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`} className="" activeClassName="">
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      <hr />

      <Route path={`${path}/cast`}>
        <Cast />
      </Route>

      <Route path={`${path}/reviews`}>
        <Reviews />
      </Route>
    </>
  );
}
