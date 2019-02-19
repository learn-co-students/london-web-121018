import React from 'react';

const Painting = (props) => {
  const painting = props.painting;
  return (
    <li>
      <h1>{`${painting.title} by ${painting.artist.name}`}</h1>
      <img src={painting.image} />
      <p>{painting.date}</p>
    </li>
  );
}

export default Painting;
