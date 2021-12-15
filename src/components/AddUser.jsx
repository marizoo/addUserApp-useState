import React, {useState} from 'react'
import styled from 'styled-components';
import { CenterIt, ColumnIt } from '../globalStyle';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const Form = styled.form`
width: 90%;
${ColumnIt}
`;


const Label = styled.label`
margin-bottom: 5px;
font-size: 16px;
font-weight: 600;
` 

const Input = styled.input`
margin-bottom: 10px;
width: 100%;
height: 30px;
border: 1px solid rgba(0, 0, 0, 0.6);
border-radius: 10px;
padding-left: 10px;
font-size: 16px;
font-weight: 500px;
` 

const ButtonContainer = styled.div`
${CenterIt};
`;


const AddUser = ({onNewData, onCloseForm}) => {

    const [addName, setAddName] = useState("")
    const [addAge, setAddAge] = useState("")
    const [errors, setErrors] = useState()

    const addNameHandler = (ev) => {
        setAddName(ev.target.value);
    }

    const addAgeHandler = (ev) => {
        setAddAge(ev.target.value);
    }

    const submitHandler = (ev) => {
        ev.preventDefault();

        if(addName.trim().length === 0 || addAge.trim().length === 0){
            setErrors({
                title:'invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }

        if(+addAge < 1 || +addAge > 100) {
            setErrors({
                title:'invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }

        const newData = {
            name: addName,
            age: addAge,
            id: Math.floor(Math.random() * 1000)
        }

        onNewData(newData);
        setAddName("")
        setAddAge("")
        onCloseForm(ev);
    }

    const closeForm = (ev) => {
        onCloseForm(ev)
    }

    const errorHandler = () => {
        setErrors(null)
    }

    return (
        <>
        {errors && (
            <ErrorModal
            title={errors.title} 
            message={errors.message}
            onCloseModal={errorHandler}
            />
        )}

       
            <Form onSubmit={submitHandler}>
            <Label htmlFor='username'>Username:</Label>
            <Input  id="username" type="text" placeholder='name' value={addName} onChange={addNameHandler}/>
            <Label htmlFor='age'>Age:</Label>
            <Input  id="age" type="number" placeholder='age' value={addAge} onChange={addAgeHandler}/>
            <ButtonContainer>
            <Button type="submit">Add User</Button>
            <Button onClick={closeForm}>Cancel</Button>
            </ButtonContainer>  
            </Form>
        
            
        </>
    )
}

export default AddUser
