import React, { Component } from "react";
import "../styles/landing.css";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    let users = this.props.users;
    return (
      <div id="Landing-container">
        {users.map((f) => {
          return (
            <Link to={`/catalog/${f.name}/${f.budget}`}>
              <div className="user" style={{ backgroundColor: f.color }}>
                <span className="userName">{f.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Landing;
