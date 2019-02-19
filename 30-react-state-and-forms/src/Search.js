import React from 'react';

const Search = props => {
  return (
    <input 
      onChange={event => props.handleChange(event.target.value)}
      placeholder='input your search query here'
    />
  );
};

export default Search
