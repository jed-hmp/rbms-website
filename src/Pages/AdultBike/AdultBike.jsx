import React, { useState } from 'react';
import BikeShowcase from './Bike_Display/BikeShowcase';
import BikeCarousel from './Bike_Display/BikeCarousel';

import MountainBike from './Bike_Images/m.bike.png';
import RoadBike from './Bike_Images/r.bike.png';
import JapaneseBike from './Bike_Images/j.bike.png';
import MBike from './Bike_Images/mb.bike.png';

import './AdultBike.css';

const bikes = [
  {
    id: 1,
    name: "MOUNTAIN BICYCLE",
    type: "ADULT'S BICYCLE",
    description: `A mountain bike, or "MTB" for short, refers to a specific type of bicycle 
      designed for off-road riding on rough terrain, such as trails, hills, and mountains. 
      It has a smart lock, sound alarm, and GPS tracker that you can control using a mobile application.`,
    image: MountainBike
  },
  {
    id: 2,
    name: "ROAD BICYCLE",
    type: "RACING BIKE",
    description: `A mountain bike, or "MTB" for short, refers to a specific type of bicycle 
      designed for off-road riding on rough terrain, such as trails, hills, and mountains. 
      It has a smart lock, sound alarm, and GPS tracker that you can control using a mobile application.`,
    image: RoadBike
  },
  {
    id: 3,
    name: "JAPANESE BIKE",
    type: "COMMUTER BIKE",
    description: `A city bike is built for urban commuting and leisurely rides. It offers comfort and 
      practicality for everyday travel around the city.`,
    image: JapaneseBike
  },
  {
    id: 4,
    name: "CITY BICYCLE",
    type: "COMMUTER BIKE",
    description: `A city bike is built for urban commuting and leisurely rides. It offers comfort and 
      practicality for everyday travel around the city.`,
    image: MBike
  },
];

export default function AdultBike() {
  const [selectedBike, setSelectedBike] = useState(bikes[0]); // Default to the first bike

  const handleBikeSelect = (bike) => {
    setSelectedBike(bike);
  };

  return (
    <div id='AdultbikePage'>
    <div className="App">
      {/* Bike Showcase */}
      <BikeShowcase bike={selectedBike} />
      
      {/* Bike Carousel */}
      <BikeCarousel bikes={bikes} onBikeSelect={handleBikeSelect} />
    </div>
    </div>
  );
}


