import { useState, useEffect, Suspense, lazy } from "react";
import Loader from "react-loader-spinner";
import { useParams } from "react-router";
import {
  NavLink,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import * as Api from "../../services/Api";
// import Cast from '../Cast/Cast';
import Reviews from "../Reviews/Reviews";
import s from "./MovieDetailsPage.module.css";

const Cast = lazy(() => import("../Cast/Cast" /* webpackChunkName: "cast" */));

export default function MovieDetailsPage() {
  console.log(" MovieDetailsPage", MovieDetailsPage);
  const location = useLocation();
  const history = useHistory();

  const { url, path } = useRouteMatch();

  const { moviesId } = useParams();

  const [movie, setMovie] = useState("");

  useEffect(() => {
    Api.fethDetailsMovies(moviesId)
      .then(setMovie)
      .catch((error) => error.massage);
  }, [moviesId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <>
      {/* <h1>{`Movie ${moviesId}`}</h1> */}
      <button className={s.button} type="button" onClick={onGoBack}>
        Go back
      </button>
      {movie && (
        <section>
          <div className={s.sectionMovie}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className={s.overviewMovie}>
              <h1>{movie.title}</h1>
              <p>User Score: {movie.vote_average * 10}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
        </section>
      )}

      {movie && (
        <div className={s.titleInfo}>
          <h3>Additional information:</h3>
          <ul className={s.castList}>
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
      <Suspense fallback={<Loader />}>
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>

        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </Suspense>
    </>
  );
}
