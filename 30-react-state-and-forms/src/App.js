import React from 'react';
import PaintingList from './PaintingList';
import artworks from '../artworks';

const App = () => {
  return (
    <PaintingList paintings={artworks}/>
  );
};

export default App;
