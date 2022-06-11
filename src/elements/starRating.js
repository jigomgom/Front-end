import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import styled from 'styled-components';


const Stars = () => {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
    // other logic
    console.log(rate/20);
}
  return (
    <div className='star-rating'>
      <Rating onClick={handleRating} ratingValue={rating} fillColor="orange" size="25px" /* Available Props */ />
    </div>
  )

};

export default Stars;

// https://www.npmjs.com/package/react-simple-star-rating