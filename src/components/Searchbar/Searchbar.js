// import { useState } from 'react';
import { Component } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = { value: '' };

  handleNameChange = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      return toast.error('Enter query to search');
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          value={this.state.value}
          onChange={this.handleNameChange}
          placeholder="Enter a movie name"
        ></input>
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
    );
  }
}

// const Searchbar = ({ onSubmit }) => {
//   const [value, setValue] = useState('');

//   // const reset = () => {
//   //   setValue('');
//   // };

//   // const submitHandler = event => {
//   //   event.preventDefault();
//   //   if (value.trim() === '') {
//   //     return toast.warning('Enter query to search');
//   //   }
//   //   onSubmit(value);
//   //   reset();
//   // };

//   const handleInputChange = event => {
//     setValue(event.target.value);
//   };

//   return (
//     <form onSubmit={''} className={s.form}>
//       <input
//         className={s.input}
//         type="text"
//         autoComplete="off"
//         autoFocus
//         value={value}
//         onChange={handleInputChange}
//         placeholder="Enter a movie name"
//       ></input>
//       <button type="submit" className={s.button}>
//         Search
//       </button>
//     </form>
//   );
// };

// export default Searchbar;
