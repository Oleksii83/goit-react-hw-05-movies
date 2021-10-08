import "./App.css";
import Loader from "./components/Loader/Loader";
import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import NotFound from "./Views/NotFound";

const HomePage = lazy(() =>
  import("./components/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const Movies = lazy(() =>
  import("./components/Movies/Movies" /* webpackChunkName: "movies" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./components/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
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
          <Route>
            <Redirect from="" to="/" />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
