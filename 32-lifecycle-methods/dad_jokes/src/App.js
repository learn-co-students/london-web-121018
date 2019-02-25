import React, { Component } from "react";
import DadJokeList from "./DadJokeList";
import "./App.css";

class App extends Component {
  constructor() {
    console.log("the App constructor has been called");
    super();
    this.state = {
      jokes: []
    };
  }

  componentDidMount() {
    this.fetchJokes();
  }

  fetchJokes = () => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then(res => res.json())
      .then(jokes => this.setState({ jokes }));
  };

  render() {
    console.log("the App render has been called");
    return (
      <div>
        <h1>welcome to the chuck norris joke category list app</h1>
        <DadJokeList jokes={this.state.jokes} />
      </div>
    );
  }
}

export default App;
