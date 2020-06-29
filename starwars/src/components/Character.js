// Write your Character component here

import React from 'react';


const Character = (props) => {
    return <div>
      <h1>{props.name}</h1>
      <h2><img src={props.image} alt='image' /></h2>
      <h2>{props.gender}</h2>
      <h2>{props.species}</h2>
      <h2>{props.type}</h2>
      <h2>{props.status}</h2>

        
    </div>
}

export default Character;