import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";

class MovieList extends Component {
  state = { movies: [] };

  componentDidMount() {
    const movies = getMovies();
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
            </tr>
          </thead>
          <tbody>
            {movies.map((m) => (
              <tr key={m._id}>
                <td key={m._id}>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieList;
