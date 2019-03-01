import React, { Component } from "react";

export default class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.props.searchInput}
          onChange={this.props.handleInputChange}
        />
      </form>
    );
  }
}
