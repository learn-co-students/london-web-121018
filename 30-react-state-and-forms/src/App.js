import React from 'react';

import artworks from '../artworks';

import PaintingList from './PaintingList';
import Search from './Search';
import Title from './Title';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      paintings: artworks,
      searchQuery: '',
      colour: 'red'
    };

    this.handlePaintingsFiltering = this.handlePaintingsFiltering.bind(this);
    this.getFilteredPaintings = this.getFilteredPaintings.bind(this);
    this.changeColour = this.changeColour.bind(this);
  };

  handlePaintingsFiltering (searchInput) {
    this.setState({
      searchQuery: searchInput
    });
  }

  getFilteredPaintings () {
    const filteredPaintings = this.state.paintings.filter( (painting) => {
      const searchInput = this.state.searchQuery.toLowerCase();
      const paintingTitle = painting.title.toLowerCase();

      return paintingTitle.includes(searchInput);
    });

    return filteredPaintings;
  };

  changeColour () {
    const colours = ['blue', 'red', 'yellow'];
    const newColour = colours[Math.floor ( Math.random() * colours.length )];

    this.setState({
      colour: newColour
    });
  }

  render () {
    return (
      <div>
        <Title color={this.state.colour} />
        <button onClick={this.changeColour}>change the h1 colour</button>
        <Search handleChange={this.handlePaintingsFiltering} />
        <PaintingList paintings={this.getFilteredPaintings()}/>
      </div>
    );
  };
}



export default App;
