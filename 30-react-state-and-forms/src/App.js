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
      searchQuery: ''
    };

    this.handlePaintingsFiltering = this.handlePaintingsFiltering.bind(this)
  };

  handlePaintingsFiltering = (searchInput) => {
    this.setState({
      searchQuery: searchInput
    })
  }

  render () {
    return (
      <div>
        <Title />
        <Search handleChange={this.handlePaintingsFiltering} />
        <PaintingList paintings={this.state.paintings}/>
      </div>
    );
  };
}



export default App;
