import React, { Component } from "react";

class Joke extends Component {
  constructor(props) {
    super(props);
    console.log(
      `the Joke category of ${this.props.category} constructor has been called`
    );
  }
  render() {
    console.log(`the Joke ${this.props.category} render has been called`);
    return <div>{this.props.category}</div>;
  }
}

export default Joke;
