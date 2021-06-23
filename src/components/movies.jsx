import React, { Component } from "react";
import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: [
      {
        id: "1",
        title: "Movie 1",
        genere: "movie genere 1",
        stock: 10,
        rate: 2.5,
        liked: true,
      },
      {
        id: "2",
        title: "Movie 2",
        genere: "movie genere 2",
        stock: 15,
        rate: 3.5,
      },
      {
        id: "3",
        title: "Movie 3",
        genere: "movie genere 3",
        stock: 30,
        rate: 4.5,
      },
    ],
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies in the database.</p>;

    return (
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.genere}</td>
                <td>{movie.stock}</td>
                <td>{movie.rate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
