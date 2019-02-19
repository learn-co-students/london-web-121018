import React from 'react';

const Painting = (props) => {
  const painting = props.painting;
  return (
    <li>
      <img src={painting.image} />
      <h1>{`${painting.title} by ${painting.artist.name}`}</h1>
      <p>{painting.date}</p>
      <p>{`${painting.dimensions.width} x ${painting.dimensions.height}`}</p>
    </li>
  );
}

export default Painting;
