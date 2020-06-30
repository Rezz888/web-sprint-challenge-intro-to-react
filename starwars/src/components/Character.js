// Write your Character component here

import React from 'react';
// import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const Card = styled.section `
    border: 3px solid #2F4F4F;
    width: 60%;
    margin: 20px auto;

    &:hover {
        background: black;
        color: gray;
    }
`
const Column = styled.div `
   display: flex;
   justify-content: space-evenly;
`



const Character = (props) => {
    return (

   <Card>
    
     <Column>
        <img src={props.image} alt='image' />
        
        <div>
        <h1>{props.name}</h1>
        <h3>Gender: {props.gender}</h3>
        <h3>Species: {props.species}</h3>
        <h3>Type: {props.type}</h3>
        <h3>Status: {props.status}</h3>
        </div>
     </Column>
    </Card>
    )
    
}

export default Character;