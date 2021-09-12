import './App.css';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import Trial from './Views/Trial';
import Home from './Views/Home';
import Movies from './Views/Movies';
import NotFound from './Views/NotFound';

function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/movies">
          <Movies />
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
