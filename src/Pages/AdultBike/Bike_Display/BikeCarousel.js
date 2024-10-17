import React, { useState } from 'react';
import '../Bike_Style/BikeCarousel.css';

const BikeCarousel = ({ bikes = [], labels = [], onBikeSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [startX, setStartX] = useState(0); // Initial touch position
  const [translateX, setTranslateX] = useState(0); // Current translate value
  const [isDragging, setIsDragging] = useState(false); // Track drag state
  const [isEditing, setIsEditing] = useState(false); // Track edit state
  const [editableLabels, setEditableLabels] = useState(labels); // Labels state

  const handleAnimationEnd = () => {
    setIsTransitioning(false);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX); // Get initial touch position
    setTranslateX(0); // Reset translation
    setIsDragging(true); // Start dragging
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX; // Get current touch position
    const diffX = startX - currentX; // Calculate drag distance
    setTranslateX(-diffX); // Set the translateX based on drag distance
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false); // Stop dragging

    if (translateX > 50) {
      handlePrevBike();
    } else if (translateX < -50) {
      handleNextBike();
    } else {
      setTranslateX(0);
    }
  };

  const handleNextBike = () => {
    if (isTransitioning || bikes.length === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((currentIndex + 1) % bikes.length);
    onBikeSelect(bikes[(currentIndex + 1) % bikes.length]);
    setTranslateX(0); // Reset translation
    setTimeout(handleAnimationEnd, 600); // Duration of the transition
  };

  const handlePrevBike = () => {
    if (isTransitioning || bikes.length === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((currentIndex - 1 + bikes.length) % bikes.length);
    onBikeSelect(bikes[(currentIndex - 1 + bikes.length) % bikes.length]);
    setTranslateX(0); // Reset translation
    setTimeout(handleAnimationEnd, 600); // Duration of the transition
  };

  const handleEditLabel = (index) => {
    setIsEditing(true); // Enable editing mode
  };

  const handleSaveLabel = (index) => {
    setEditableLabels((prevLabels) => {
      const newLabels = [...prevLabels];
      newLabels[index] = editableLabels[index];
      return newLabels;
    });
    setIsEditing(false); // Disable editing mode
  };

  if (bikes.length === 0) {
    return <p>No bikes available</p>; // Fallback if no bikes are passed
  }

  const previousBike = bikes[(currentIndex - 1 + bikes.length) % bikes.length];
  const nextBikeData = bikes[(currentIndex + 1) % bikes.length];
  const nextNextBike = bikes[(currentIndex + 2) % bikes.length];

  return (
    <div className="bike-carousel">
      <button onClick={handlePrevBike} className="carousel-control-prev">{'<'}</button>

      <div
        className="bike-carousel-images"
        style={{ transform: `translateX(${translateX}px)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel-bike">
          <div className="bike-item" onClick={() => onBikeSelect(previousBike)}>
            <img src={previousBike.image} alt={previousBike.name} className="carousel-image" />
            {isEditing ? (
              <input
                type="text"
                value={editableLabels[currentIndex - 1] || previousBike.name}
                onChange={(e) => {
                  const newLabels = [...editableLabels];
                  newLabels[currentIndex - 1] = e.target.value;
                  setEditableLabels(newLabels);
                }}
                onBlur={() => handleSaveLabel(currentIndex - 1)}
                autoFocus
              />
            ) : (
              <p className="bike-label" onClick={() => handleEditLabel(currentIndex - 1)}>
                {editableLabels[currentIndex - 1] || previousBike.name}
              </p>
            )}
          </div>
        </div>

        <div className="carousel-bike">
          <div className="bike-item" onClick={() => onBikeSelect(nextBikeData)}>
            <img src={nextBikeData.image} alt={nextBikeData.name} className="carousel-image" />
            {isEditing ? (
              <input
                type="text"
                value={editableLabels[currentIndex] || nextBikeData.name}
                onChange={(e) => {
                  const newLabels = [...editableLabels];
                  newLabels[currentIndex] = e.target.value;
                  setEditableLabels(newLabels);
                }}
                onBlur={() => handleSaveLabel(currentIndex)}
                autoFocus
              />
            ) : (
              <p className="bike-label" onClick={() => handleEditLabel(currentIndex)}>
                {editableLabels[currentIndex] || nextBikeData.name}
              </p>
            )}
          </div>
        </div>

        <div className="carousel-bike">
          <div className="bike-item" onClick={() => onBikeSelect(nextNextBike)}>
            <img src={nextNextBike.image} alt={nextNextBike.name} className="carousel-image" />
            {isEditing ? (
              <input
                type="text"
                value={editableLabels[currentIndex + 1] || nextNextBike.name}
                onChange={(e) => {
                  const newLabels = [...editableLabels];
                  newLabels[currentIndex + 1] = e.target.value;
                  setEditableLabels(newLabels);
                }}
                onBlur={() => handleSaveLabel(currentIndex + 1)}
                autoFocus
              />
            ) : (
              <p className="bike-label" onClick={() => handleEditLabel(currentIndex + 1)}>
                {editableLabels[currentIndex + 1] || nextNextBike.name}
              </p>
            )}
          </div>
        </div>
      </div>

      <button onClick={handleNextBike} className="carousel-control-next">{'>'}</button>
    </div>
  );
};

export default BikeCarousel;
