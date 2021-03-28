import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/movies/movieList";

function App() {
  return (
    <div className="container">
      <h1>Movie Rental</h1>
      <MovieList />
    </div>
  );
}

export default App;
