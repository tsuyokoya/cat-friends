import React from 'react';

const Card = (props) => {

  //returns a single card component with cat detail
  return (
    <div className = 'bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${props.id}?set=set4`} alt="cats" />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  )
}

export default Card;