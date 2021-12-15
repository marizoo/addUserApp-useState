import React from 'react';
import styled from 'styled-components';
import { CenterIt } from '../globalStyle';

const Container = styled.button`
padding: 10px;
width: 35%;
color: white;
font-size: 16px;
font-weight: 500;
${CenterIt};
background-color: purple;
border: none;
border-radius: 10px;
margin: 15px;
cursor: pointer;
`;


const Button = (props) => {
    return (
        <Container onClick={props.onClick} type={props.type || 'button'}>
            {props.children}
        </Container>
    )
}

export default Button
