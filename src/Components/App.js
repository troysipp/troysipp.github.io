import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Troy Sipprelle</h1>
          <nav>
            <Link to="/">Want to know more about me?</Link>
            <Link to="/projects">What I've been up to lately</Link>
          </nav>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return <p>hello this is me </p>; //<ArticleList {...props} articles={this.state.articles} />;
            }}
          />
          {/* <Route
            path="/:article"
            render={props => {
              return <Article {...props} articles={this.state.articles} />;
            }}
          /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
