
import React, {useState} from "react";
import Card from "./UI/Card";
import styled from "styled-components";
import { ColumnIt } from "./globalStyle";
import ListUser from "./components/ListUser";
import AddUser from "./components/AddUser";
import Button from "./UI/Button";

const Container = styled.div`
width: 100vw;
height: 100vh;
${ColumnIt};
align-items: center;
`

const DUMMY_DATA = [
  {
    id: "001",
    name: "Jackson",
    age: "39"
  },
  {
    id: "002",
    name: "Leighton",
    age: "21"
  },
  
]


const App = () => {

  const [showList, setShowList] = useState(DUMMY_DATA);
  const [showForm, setShowForm] = useState(false);

  const listNewData = (newData) => {
    setShowList((prevList) => {
      return[newData, ...prevList];
    })
  }

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
  <Container>
    <Card>
      {!showForm && (<Button onClick={toggleForm} >Add User</Button>)}
      {showForm && <AddUser onCloseForm={toggleForm} onNewData={listNewData} />}
      
    </Card>
    <Card>
      <ListUser datas={showList}/>
    </Card>
    
  </Container>
  )
};

export default App;