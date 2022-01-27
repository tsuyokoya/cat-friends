import React from 'react';

const Card = (props) => {

  //returns a card component with cat detail
  return (
    <div>
      <img src={`https://robohash.org/${props.id}?set=set4`} alt="cats" />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  )
}

export default Card;

// return (
//   cats.map((cat,i) => {
//     return (
//       <div>
//         <img src={`https://robohash.org/${cats[i].id}?set=set4`} alt="cats" />
//         <h2>{cats[i].name}</h2>
//         <p>{cats[i].email}</p>
//       </div>
//     )
//   })

// )