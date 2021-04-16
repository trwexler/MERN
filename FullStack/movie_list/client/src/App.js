import logo from './logo.svg';
import './App.css';
import AllMovies from './components/AllMovies';
import MovieDetails from './components/MovieDetails';
import NewMovie from './components/NewMovie';
import EditMovie from './components/EditMovie';


function App() {
  return (
    <div className="App">
    
      <AllMovies/>
      <MovieDetails/>
      <NewMovie/>
      <EditMovie/>

    </div>
  );
}

export default App;
