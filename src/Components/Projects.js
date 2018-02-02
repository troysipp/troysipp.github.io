import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="project-list">
        <div className="project">
          <a href="https://troysipp.github.io/tower-of-hanoi/">
            Tower of Hanoi
          </a>
        </div>
        <div className="project">
          <a href="https://recipe-eat.herokuapp.com/recipes">recipeat</a>
        </div>
        <div className="project">
          <a href="http://home-finder.surge.sh/homes">Home Finder</a>
        </div>
        <div className="project">
          <a href="http://social-network.surge.sh/home">JustForFriends</a>
        </div>
      </div>
    );
  }
}

export default Projects;
