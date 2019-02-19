import React from 'react';
import Painting from './Painting';

const PaintingList = ( props ) => {
  const allPaintings = props.paintings.map(painting => <Painting painting={painting} />);

  return (
    <div>
      <ul>
        {allPaintings}
      </ul>
    </div>
  )
};

export default PaintingList;
