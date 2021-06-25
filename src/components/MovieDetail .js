import React, { Component } from "react";
import "../styles/movieDetail.css";
class MovieDetail extends Component {
  render() {
    let movie = this.props.moives.find(
      (m) => m.id == this.props.match.params.id
    );
    return (
      <div>
        <span className="movieDetail">Title:{movie.title}</span>
        <br />
        <span className="movieDetail">Year:{movie.year}</span>
        <br />
        <img className="movieImg" src={movie.img} alt="" />
        <br />
        <p className="desc">Description:{movie.descrShort}</p>
      </div>
    );
  }
}

export default MovieDetail;
