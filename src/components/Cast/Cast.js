import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as Api from '../../services/Api';
import logo from './logo.jpg';
import s from './Cast.module.css';
// import { Link } from 'react-router-dom';

export default function Cast() {
  const { moviesId } = useParams();
  const [cast, setCast] = useState(null);
  // const movies = movie.find(genre => genre.id === Number(moviesId));
  useEffect(() => {
    Api.fethActorsMovies(moviesId)
      .then(result => setCast([...result.cast]))
      .catch(error => error.massage);
  }, [moviesId]);
  return (
    <section>
      <ul className={s.castList}>
        {/* <h1>Добро пожаловать в {moviesId} </h1> */}

        {cast &&
          cast.map(actor => (
            <li key={actor.id}>
              <p>Character: {actor.character}</p>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                ></img>
              ) : (
                <img src={logo} width="200" height="300" alt={actor.name}></img>
              )}
              <p>{actor.original_name}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}
