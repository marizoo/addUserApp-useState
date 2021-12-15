import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import { ColumnIt } from '../globalStyle';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const Container = styled.div`
${ColumnIt};
`;

const Form = styled.form`
${ColumnIt};
`;

const Label = styled.label`
font-size: 16px;
font-weight: 500;
margin-bottom: 5px;
`;

const Input = styled.input`
font-size: 16px;
font-weight: 300;
padding-left: 10px;
height: 30px;
width: 100%;
display:flex;
align-items: center;
border: 1px solid rgba(0, 0, 0, 0.7);
margin-botom: 10px;
`;

const ButtonContainer = styled.div`
display: flex;
`



const AddUser1 = ({onCloseForm, onNewData}) => {

    const nameInputRef = useRef()
    const ageInputRef = useRef()
    const [errors, setErrors] = useState()

    const submitHandler = (ev) => {
        ev.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setErrors({
                title: 'Oops, Invalid Input',
                message: 'Please enter valid name and age (non-empty values).'
            });
            return;
        }

        if (+enteredAge < 1 || +enteredAge > 100) {
            setErrors({
                title: 'oops, invalid input',
                message: 'please enter valid age (from 1 to 100).'
            });
            return;
        }

        const newData = {
            name: enteredName,
            age: enteredAge,
            id: Math.floor(Math.random() * 1000)
        }

        onNewData(newData);
        nameInputRef.current.value="";
        ageInputRef.current.value ="";
        onCloseForm(ev)
        
    }

    const closeForm = (ev) => {
        onCloseForm(ev)
    }

    const errorHandler = () => {
        setErrors(null);
    }

    return (
        <Container>
            {errors && (
                <ErrorModal 
                title={errors.title}
                message={errors.message}
                onCloseModal={errorHandler}
                />
            )}
            <Form onSubmit={submitHandler}>
                <Label htmlFor='username'>Username:</Label>
                <Input id="username" placeholder="username" ref={nameInputRef}/>
                <Label htmlFor='age'>Age:</Label>
                <Input id="age" placeholder="age" ref={ageInputRef}/>
                <ButtonContainer>
                    <Button type="submit">Add User</Button>
                    <Button onClick={closeForm}>Cancel</Button>
                </ButtonContainer>
            </Form>
        </Container>
    )
}

export default AddUser1
