import React from 'react';
import PaintingList from './PaintingList';
import artworks from '../artworks';

const App = () => {
  console.log(artworks);
  return (
    <PaintingList paintings={artworks}/>
  );
};

export default App;
