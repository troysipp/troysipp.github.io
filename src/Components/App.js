import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import About from "./About";
import Projects from "./Projects";
import me from "../Images/me.jpeg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/">Troy Sipprelle</Link>
          </h1>
        </header>
        <div className="body">
          <nav>
            {/* <p>Want to know...</p> */}
            <Link to="/about">More about me</Link>
            <Link to="/projects">What I've been up to lately</Link>
          </nav>
          <div className="main">
            <Switch>
              <Route exact path="/about" render={() => <About />} />
              <Route exact path="/projects" render={() => <Projects />} />
              <Route path="/*" render={() => <Redirect to="/" />} />
            </Switch>
          </div>
          <img src={me} className="me-pic" />
        </div>
        <footer>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/troy-sipprelle-516b1491/"
          >
            LinkedIn
          </a>
          <a className="footer-link" href="https://github.com/troysipp">
            GitHub
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
