import React, { useState } from 'react';
import Star from '../assets/Star';
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../store/data'

const Stars = () => {
  // const [rating, setRating] = useState(0);
  const rating = useSelector(state => state.data.stars)
  const [hoveredRating, setHoveredRating] = useState(0);
  const dispatch = useDispatch();

  const handleHover = (hoveredStar) => {
    setHoveredRating(hoveredStar);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (clickedRating) => {
    // setRating(clickedRating);
    dispatch(actions.setStars(Number(clickedRating)))
  };

  return (
    <div className='stars'>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onMouseEnter={() => handleHover(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(star)}
          className='star-item'
        >
          <Star
            color={
              star <= rating
                ? '#EDC229' // Rated color
                : star <= hoveredRating
                  ? '#F2D15ECC' // Hovered color
                  : '#FFFFFFCC' // Default color
            }
          />
        </span>
      ))}
    </div>
  );
};

export default Stars;
