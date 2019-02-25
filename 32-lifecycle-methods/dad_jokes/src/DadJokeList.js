import React, { Component } from "react";
import Joke from "./Joke";

class DadJokeList extends Component {
  constructor(props) {
    super(props);
    console.log(`the dad joke list constructor has been called`);
  }
  render() {
    console.log("the DadJokeList render has been called");
    const categoriesArray = this.props.jokes.map(category => (
      <Joke category={category} />
    ));
    return (
      <div>
        {categoriesArray.length < 1 ? (
          "the categories are loading"
        ) : (
          <ul>{categoriesArray}</ul>
        )}
      </div>
    );
  }
}

export default DadJokeList;
