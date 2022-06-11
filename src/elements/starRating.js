import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import styled from 'styled-components';

 
export const Stars = () => {
 const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
    // other logic
    console.log(rate);
}
  return (
    <div className='star-rating mg40'>
      <Rating showTooltip onClick={handleRating} ratingValue={rating}  fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']}  size="30px" /* Available Props */ />
    </div>
  )

};

export const StarDisplay = (props) => {
  
  console.log(props.rate)
  return (
    <div className='rating'>
      <Rating ratingValue={props.rate} fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']}  size="22px" readonly={true} /* Available Props */ />
    </div>
  )
};


// https://www.npmjs.com/package/react-simple-star-rating