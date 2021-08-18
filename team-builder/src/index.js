import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const teamList = [
//   {name: "John" , email: "john@john.com", role: "Frontend Engineer" },
//   {name: "Sally" , email: "sally@sally.com", role: "Backend Engineer" },
//   {name: "Tim" , email: "tim@tim.com", role: "Designer" },
//   {Name: "Karen" , email: "karen@karen.com", role: "Team Leader" },
// ]

// function TeamForm() {
//   const [formValues, setFormValues] = useState({ name: "", email: "", role: "" });
//   const [teamMembers, setTeamMembers] = useState(teamList);
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
