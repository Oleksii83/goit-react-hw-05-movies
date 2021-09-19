import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as Api from '../../services/Api';
// import { Link } from 'react-router-dom';

export default function Cast() {
  const { moviesId } = useParams();
  const [cast, setCast] = useState(null);
  // const movies = movie.find(genre => genre.id === Number(moviesId));
  useEffect(moviesId => {
    Api.fethActorsMovies(moviesId)
      .then(result => setCast([...result.cast]))
      .catch(error => error.massage);
  }, []);
  return (
    <section>
      <ul>
        <h1>Добро пожаловать в {moviesId} </h1>

        {cast &&
          cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                alt={actor.name}
              ></img>
            </li>
          ))}
      </ul>
    </section>
  );
}
