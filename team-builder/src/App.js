//import logo from './logo.svg';
import React, { useState, useEffect } from "react"
import './App.css';
//import axios from 'axios';
import axios from "./axios";
import TeamMember from "./TeamMember";

function App() {
const [teamMemberList, setTeamMemberList] = useState([]);
const [error, setError] = useState("")
//const [formValues, setFormValues] = useState(initialFormValues);

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
      {teamMemberList.map(teamMember => {
        return <TeamMember key={teamMember.id} details={teamMember}/>
      })}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* {teamMemberList.map(teamMember => {
        return <TeamMember key={teamMember.id}/>
      })} */}
    </div>
  );
}

export default App;
