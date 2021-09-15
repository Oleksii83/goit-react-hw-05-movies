import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function Cast() {
  const { moviesId } = useParams();
  return <h1>Добро пожаловать в {moviesId} </h1>;
}
