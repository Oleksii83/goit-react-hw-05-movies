import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as Api from '../../services/Api';

export default function DetailsMovies() {
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
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <p>User Score: {movie.vote_average * 10}%</p>
          <h2>Oerview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
