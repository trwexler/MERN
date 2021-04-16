import logo from './logo.svg';
import './App.css';
import AllMovies from './components/AllMovies';
import MovieDetails from './components/MovieDetails';
import NewMovie from './components/NewMovie';
import EditMovie from './components/EditMovie';
import { Router } from '@reach/router';


function App() {
  return (
    <div className="App">
    <Router>
      <AllMovies default/>
      <NewMovie path="/movies/new"/>
      <MovieDetails path="/movies/:id"/>
      <EditMovie path="/movies/:id/edit"/>
    </Router>
    </div>
  );
}

export default App;
