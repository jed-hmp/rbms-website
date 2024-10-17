import React from 'react';
import '../Bike_Style/BikeShowcase.css';

const BikeShowcase = ({ bike }) => {
  return (
    <div className="bike-showcase">
      <img src={bike.image} alt={bike.name} />
      <div className="bike-info">
        <h1>{bike.name}</h1>
        <h2>{bike.type}</h2>
        <p>{bike.description}</p>
      </div>
    </div>
  );
};

export default BikeShowcase;