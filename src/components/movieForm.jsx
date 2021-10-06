import Joi from "joi-browser";
import React from "react";
import { getGenres } from "../services/genreService";
import { getMovie, saveMovie } from "../services/movieService";
import Form from "./common/form";

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", stock: "", rate: "" },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    stock: Joi.number().required().min(0).max(100).label("Stock"),
    rate: Joi.number().required().min(0).max(10).label("Daily Rental Rate"),
  };

  async componentDidMount() {
    const { data } = await getGenres();
    this.setState({ genres: data.data.data });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      stock: movie.stock,
      rate: movie.rate,
    };
  }

  doSubmit = () => {
    // call the server
    console.log(this.state.data);
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("stock", "Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
