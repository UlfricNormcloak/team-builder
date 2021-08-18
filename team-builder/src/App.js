//import logo from './logo.svg';
import React, { useState, useEffect } from "react"
import './App.css';
//import axios from 'axios';
import axios from "./axios";
import TeamMember from "./TeamMember";
import TeamForm from "./TeamMemberForm";

const initialFormValues = {
  //////Text Inputs//////
  name: "",
  email: "",
  role: "",
}

function App() {
const [teamMemberList, setTeamMemberList] = useState([]);
const [error, setError] = useState("")
const [formValues, setFormValues] = useState(initialFormValues);
const updateForm = (inputName, inputValue) => {
setFormValues({...formValues, [inputName]: inputValue});
};

const submitForm = () => {

  const newTeamMember = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role,
  };
  console.log("here too");

  if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) {
    setError("All fields must be completed..");
    return;
  }

  axios
     .post("fakeapi.com", newTeamMember)
     .then((res) => {
       console.log(res);
       setTeamMemberList([res.data,...teamMemberList]);
       setFormValues(initialFormValues);
       setError("");
     })
     .catch((err) => console.error(err));
}
useEffect(() => {
axios.get("fakeapi.com")
   .then((res) =>  {
     console.log(res);
     setTeamMemberList(res.data);
   })
  .catch((error) => {
      console.error(error)
      setError("Data not found")
  })
}, []);

  return (
    <div className="App">
      {error && <h1>{error}</h1>}
    
      <TeamForm 
      
         values={formValues}
         update={updateForm}
         submit={submitForm}
      
      />

      {teamMemberList.map(teamMember => {
        return <TeamMember key={teamMember.id} details={teamMember}/>
      })}
    </div>
  );
}

export default App;
