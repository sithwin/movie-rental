import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import Like from "./../common/like";

class MovieList extends Component {
  state = { movies: [] };

  componentDidMount() {
    const movies = getMovies();
    this.setState({ movies });
  }

  handleLike(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>title</th>
              <th>genre</th>
              <th>numberInStock</th>
              <th>dailyRentalRate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((m) => (
              <tr key={m._id}>
                <td key={m._id}>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <td>
                  <Like liked={m.liked} onLike={() => this.handleLike(m)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieList;
