import './App.css';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import Trial from './Views/Trial';
import HomePage from './Views/Home';
import Movies from './Views/Movies';
import NotFound from './Views/NotFound';
import DetailsMovies from './components/DetailsMovies/DetailsMovies';

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
          <DetailsMovies />
        </Route>

        <Route path="/trial">
          <Trial />
        </Route>

        <Route>
          <NotFound path="" />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
