import { useState, useEffect } from "react";
import * as Api from "../../services/Api";
import { NavLink, useLocation } from "react-router-dom";
import s from "./HomePage.module.css";

function HomePage() {
  const location = useLocation();

  const [page] = useState(1);
  const [movies, setMovies] = useState([]);

  // const url = useRouteMatch;

  useEffect(() => {
    Api.fethTrendingMovies(page)
      .then((moviesData) => {
        setMovies((movies) => [...movies, ...moviesData.results]);
      })
      .catch((error) => error.massage);
  }, [page]);

  return (
    <>
      <h1 className={s.title}>Trending today </h1>
      <ul className={s.PageContainer}>
        {movies &&
          movies.map((movie) => (
            <li className={s.list} key={movie.id}>
              <NavLink
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt="{movie.title}"
                  className=""
                />
                <p className={s.titleName}>{movie.title}</p>
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
}

export default HomePage;

//  ? movie.title : movie.name
