import React, { Component } from "react";
import "../styles/movie.css";
import { Link } from "react-router-dom";
class Movie extends Component {
  rentAmovie = () => {
    this.props.rentAmovie(this.props.movie.id);
  };

  unrentAmovie = () => {
    this.props.unrentAmovie(this.props.movie.id);
  };
  render() {
    return (
      <div className="movie">
        {this.props.movie.isRented ? (
          <button class="myButton" onClick={this.unrentAmovie}>
            -
          </button>
        ) : (
          <button class="myButton" onClick={this.rentAmovie}>
            +
          </button>
        )}

        <br />
        <span className="title">{this.props.movie.title}</span>
        <br />
        <Link to={`/movies/${this.props.movie.id}`}>
          <img className="img" src={this.props.movie.img} alt="" />
        </Link>
      </div>
    );
  }
}

export default Movie;
