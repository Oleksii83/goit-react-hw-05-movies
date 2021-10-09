import { Component } from "react";
import { NavLink } from "react-router-dom";
import * as Api from "../../services/Api";
import s from "./MovieSearch.module.css";

export default class MovieSearch extends Component {
  state = {
    movies: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.value;
    const nextName = this.props.value;
    if (prevName !== nextName) {
      Api.fethSearchMovies(nextName).then((data) => {
        this.setState({ movies: data.results });
      });
    }
  }
  submitQueryChangedHandler = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    return (
      <div>
        <h2 className={s.title}>{this.props.value}</h2>
        <ul className={s.PageContainer}>
          {this.state.movies &&
            this.state.movies.map((movie) => (
              <li className={s.list} key={movie.id}>
                <NavLink
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: this.props.location },
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
      </div>
    );
  }
}
