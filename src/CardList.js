import React from 'react';
import Card from './Card';
import { cats } from './cats';

//Looops through each cat to generate a Card for each
const CardList = () => {

  return (
    cats.map((cat,i) => {
      return (
        //need to give a unique key so React can keep track in case something deleted
        <Card key={cats[i].id} id={cats[i].id} name = {cats[i].name} email = {cats[i].email}/>
      )
    })

  )

}

export default CardList;