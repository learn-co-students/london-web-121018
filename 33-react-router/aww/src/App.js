import React, { Component } from "react";
import Card from "./Card";
import CardList from "./CardList";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    const apiUrl = `http://shibe.online/api/shibes?count=50&urls=true`;
    fetch(apiUrl)
      .then(data => data.json())
      .then(cards => this.setState({ cards }));
  }

  regenerateCardUrl = cardId => `https://cdn.shibe.online/shibes/${cardId}.jpg`;

  render() {
    return (
      <div>
        <h1>The famous pictures website where you can see pictures</h1>
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => <h1>welcome home</h1>} />
          <Route
            path="/cards/:id"
            component={routerProps => {
              const cardUrl = this.regenerateCardUrl(
                routerProps.match.params.id
              );
              return <Card url={cardUrl} />;
            }}
          />
          <Route
            path="/cards"
            component={() => <CardList cards={this.state.cards} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
