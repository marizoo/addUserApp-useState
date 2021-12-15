import React from 'react'
import styled from 'styled-components';
import { ColumnIt } from '../globalStyle';

const Container = styled.div`
${ColumnIt}
width: 90%;
`;

const UL = styled.ul`
padding: 0;
margin: 0;
list-style: none;
${ColumnIt};
`;

const LI = styled.li`
padding-left: 15px;
font-size: 16px;
font-weight: 500;
height: 30px;
width: 100%;
border: 1px solid rgba(0, 0, 0, 0.7);
border-radius: 10px; 
display:flex;
align-items: center;
margin-bottom: 20px;
`;




const ListUser = ({datas}) => {
    return (
        <Container>
            <UL>
                {datas.map( (data) => (
                    <LI key={data.id}>{data.name} ({data.age} years old)</LI>
                ))}
            </UL>          
        </Container>
    )
}

export default ListUser
