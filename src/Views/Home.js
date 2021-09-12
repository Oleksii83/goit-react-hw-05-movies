import fethTrendingFilms from '../services/Api';
import { useState, useEffect } from 'react';

export default function Home() {
  const [name, SetName] = useState(null);

  //   useEffect(() => {
  //     fethTrendingFilms().then(SetName);
  //   }, []);

  console.log(fethTrendingFilms);
  return <h1>Trending today </h1>;
}
