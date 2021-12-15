import React from 'react'
import styled from 'styled-components';
import { CenterIt } from '../globalStyle';

const Container = styled.div`
background-color: white;
border-radius: 10px;
margin: 20px;
padding: 25px;
width: 600px;
${CenterIt};
flex-direction: column;
`;


const Card = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Card
