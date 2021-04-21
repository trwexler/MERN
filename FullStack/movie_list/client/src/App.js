import './App.css';
import { Router } from '@reach/router';
import AllMovies from './components/AllMovies';
import MovieDetails from './components/MovieDetails';
import NewMovie from './components/NewMovie';
import EditMovie from './components/EditMovie';

function App() {
  return (
    <div className="App">
      <Router>
        <AllMovies default />
        <NewMovie path='/movies/new'/>
        <MovieDetails path='/movies/:movie_id' />
        <EditMovie path='/movies/:id/edit' />
      </Router>
    </div>
  );
}

export default App;
