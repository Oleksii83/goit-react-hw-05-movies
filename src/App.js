import './App.css';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import HomePage from './components/HomePage/HomePage';
import Movies from './components/Movies/Movies';
import NotFound from './Views/NotFound';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';

function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <Movies />
        </Route>

        <Route path="/movies/:moviesId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFound path="" />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
