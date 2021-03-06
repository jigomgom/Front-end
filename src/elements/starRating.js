import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import styled from 'styled-components';

 
export const Stars = ({star, getData}) => {
 const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = ( rate ) => {
    setRating(rate)
    // other logic
    // console.log(rate);
    getData(rate)
}
  return (
    <div className='star-rating mg40'>
      <Rating showTooltip onClick={handleRating} ratingValue={rating}  fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']}  size="30px" /* Available Props */ />
    </div>
  )

};

export const StarDisplay = (props) => {
  return (
    <div className='rating'>
      <Rating ratingValue={props.rate} fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']}  size="22px" readonly={true} /* Available Props */ />
    </div>
  )
};

export const StarDisplay2 = (props) => {
  return (
    <div>
      <Rating ratingValue={props.rate} fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']}  size="30px" readonly={true} /* Available Props */ />
    </div>
  )
};


// https://www.npmjs.com/package/react-simple-star-rating