import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { CenterIt } from '../globalStyle';
import Button from './Button';
import Card from './Card';

const Header = styled.header`
${CenterIt}
padding: 1rem;
`;

const H2 = styled.h2`
`;

const Desc = styled.div`
${CenterIt}
padding: 1rem;
`;

const P = styled.p`

`;

const Footer = styled.footer`
${CenterIt};
width: 40%;
`;

const BackdropContainer = styled.div`
height: 100vh;
width: 100vw;
z-index: 5;
background-color: #1d1d1d;
opacity: 0.9;

position: fixed;
top: 0;
left: 0;
`

const Modal = styled.div`
position: fixed;
top: 30vh;
left: 27%;
width: 80%;
z-index: 7;
overflow: hidden;
`

//make Backdrop
const Backdrop = ({onCloseModal}) => {
    return (
        <BackdropContainer />
    )
}


// make overlay
const ModalOverlay = ({onCloseModal, title, message}) => {
    return (
        <Modal>

        
        <Card>
            <Header>
                <H2>{title}</H2>
            </Header>  
            <Desc>
                <P>{message}</P>
            </Desc>
            <Footer>
                <Button padding="30px" onClick={onCloseModal}>Okay</Button>
            </Footer>
        </Card>
        </Modal>
    )
}

const ErrorModal = ({onCloseModal, title, message}) => {
return (
    <Card>
    {ReactDOM.createPortal (
        <Backdrop onCloseModal={onCloseModal} />,
        document.getElementById('backdrop-root')
    )}
    {ReactDOM.createPortal (
        <ModalOverlay 
        title={title} 
        message={message}
        onCloseModal={onCloseModal}
        />,
        document.getElementById('overlay-root')
    )}
    </Card>
)
}

export default ErrorModal
