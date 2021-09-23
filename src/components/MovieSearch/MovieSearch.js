import { Component } from 'react';
import * as Api from '../../services/Api';

export default class MovieSearch extends Component {
  state = {
    value: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.value;
    const nextName = this.props.value;
    if (prevName !== nextName) {
      console.log('bvp имя');
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=aa3c597c43c8e27f94ec1708817abf2a&language=en-US&page=1&include_adult=false)&query=${nextName}`,
      )
        .then(res => res.json())
        .then(value => this.state({ value }));
    }
  }

  render() {
    return (
      <div>
        <h2>MovieSearch</h2>
        <ul>{/* {this.state.value && } */}</ul>
      </div>
    );
  }
}
