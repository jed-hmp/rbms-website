import React, { useState } from 'react';
import BikeShowcase from './Bike_Display/BikeShowcase';
import BikeCarousel from './Bike_Display/BikeCarousel';

import Bluebicycle from './Bike_Images/kb.bike.png';
import Pinkbicycle from './Bike_Images/kp.bike.png';
import Yellowbicycle from './Bike_Images/ky.bike.png';
import Redbicycle from './Bike_Images/kr.bike.png';
import Violetbicycle from './Bike_Images/kv.bike.png';

import './KidBike.css';

const bikes = [
  {
    id: 1,
    name: "BLUE BICYCLE",
    type: "KID’S BICYCLE",
    description: `kids' bikes without front baskets offer a more streamlined, lightweight, and versatile design that can support the skill development and personal style preferences of older children. It has a smart lock, sound alarm and Gps tracker that you can control using mobile application.`,
    image: Bluebicycle
  },
  {
    id: 2,
    name: "PINK BICYCLE",
    type: "KID’S BICYCLE",
    description: `A mountain bike, or "MTB" for short, refers to a specific type of bicycle 
      designed for off-road riding on rough terrain, such as trails, hills, and mountains. 
      It has a smart lock, sound alarm, and GPS tracker that you can control using a mobile application.`,
    image: Pinkbicycle 
  },
  {
    id: 3,
    name: "YELLOW BIKE",
    type: "KID’S BICYCLE",
    description: `A city bike is built for urban commuting and leisurely rides. It offers comfort and 
      practicality for everyday travel around the city.`,
    image: Yellowbicycle
  },
  {
    id: 4,
    name: "RED BICYCLE",
    type: "KID’S BICYCLE",
    description: `A city bike is built for urban commuting and leisurely rides. It offers comfort and 
      practicality for everyday travel around the city.`,
    image: Redbicycle
  },
  {
    id: 5,
    name: "VIOLET BICYCLE",
    type: "KID’S BICYCLE",
    description: `A city bike is built for urban commuting and leisurely rides. It offers comfort and 
      practicality for everyday travel around the city.`,
    image: Violetbicycle
  },
];

export default function KidBike() {
  const [selectedBike, setSelectedBike] = useState(bikes[0]); // Default to the first bike

  const handleBikeSelect = (bike) => {
    setSelectedBike(bike);
  };
  return (
    <div id='kidsbikePage'>
       <div className="App">
      {/* Bike Showcase */}
      <BikeShowcase bike={selectedBike} />
      
      {/* Bike Carousel */}
      <BikeCarousel bikes={bikes} onBikeSelect={handleBikeSelect} />
    </div>
    </div>
  )
}
