// import { useState } from 'react';
import { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Api from '../../services/Api';
import MovieSearch from '../MovieSearch/MovieSearch';

export default class Movies extends Component {
  state = {
    value: '',
  };

  handleFormSubmit = value => {
    this.setState({ value });
  };
  render() {
    return (
      <div className="">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <MovieSearch value={this.state.value} />
        <ToastContainer autoClose={3000} position="top-left" />
      </div>
    );
  }
}
//   const [movies, setMovies] = useState('null');

//   // useEffect(() => {
//   //   Api.fethSearchMovies(query)
//   //     .then(moviesData => {
//   //       setMovies(movies => [...movies, ...moviesData.results]);
//   //     })
//   //     .catch(error => error.massage);
//   // }, [page]);

//   return <Searchbar />;
//   <></>;
// }
