import React, { Component } from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";
import "../styles/catalog.css";
class Catalog extends Component {
  render() {
    let movies = this.props.moives;
    return (
      <div className="catalog">
        <div id="u-input">
          <input type="text" placeholder="enter your movie" />
          <button id="button">serch</button>
        </div>
        {/* <span className="budget"> Budget:{this.props.match.params.budget}</span> */}
        <span className="budget"> Budget:{this.props.budget}</span>
        <span className="user"> User:{this.props.match.params.name}</span>
        <div className="rentedMovies">
          <h3>Rented</h3>
          <div className="Movies">
            {movies
              .filter((m) => m.isRented === true)
              .map((f) => {
                return (
                  <Movie
                    movie={f}
                    budget={this.props.match.params.budget}
                    unrentAmovie={this.props.unrentAmovie}
                    key={f.id}
                  />
                );
              })}
          </div>
        </div>
        <div className="moviesCatalog">
          <h3>Catalog</h3>
          <div className="Movies">
            {movies
              .filter((m) => m.isRented === false)
              .map((f) => {
                return (
                  <Movie
                    movie={f}
                    budget={this.props.match.params.budget}
                    rentAmovie={this.props.rentAmovie}
                    key={f.id}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Catalog;
