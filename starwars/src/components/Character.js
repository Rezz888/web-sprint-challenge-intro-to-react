// Write your Character component here

import React from 'react';
// import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import styled, {css} from 'styled-components';

const Card = styled.section `
    border: 3px solid #2F4F4F;
    width: 60%;
    margin: 20px auto;

    &:hover {
        background: black;
        color: gray;
    }

`;

const Column = styled.div `
   display: flex;
   justify-content: space-evenly;
`;

const Headline = styled.h1 `

      font-size: 3rem;
      color: tomato;
`;

const Text = styled.h3 `

     font-size: 2rem;

`;
 
const Character = (props) => {
    return (

   <Card >
    
     <Column>
        <img src={props.image} alt='Rick and Morty Character' />
        
        <div>
        <Headline>{props.name}</Headline>
        <Text>Gender: {props.gender}</Text>
        <Text>Species: {props.species}</Text>
        <Text>Type: {props.type}</Text>
        <Text>Status: {props.status}</Text>
        </div>
     </Column>
    </Card>
    )
    
}

export default Character;