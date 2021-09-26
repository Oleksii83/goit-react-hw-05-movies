import { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import * as Api from '../../services/Api';

export default class MovieSearch extends Component {
  state = {
    movies: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.value;
    const nextName = this.props.value;
    if (prevName !== nextName) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=aa3c597c43c8e27f94ec1708817abf2a&language=en-US&page=1&include_adult=false)&query=${nextName}`,
      )
        .then(res => res.json())
        .then(console.log)
        .then(movies => this.setState({ movies }));
    }
  }

  render() {
    // const { movies } = this.state;
    return (
      <div>
        <h2>{this.props.value}</h2>
        <ul>
          {this.state.movies &&
            this.state.movies.map(movie => (
              <li key={movie.id}>
                {movie.title}
                <NavLink
                  to={{
                    pathname: `${this.props.match.path}/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movie.title}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
