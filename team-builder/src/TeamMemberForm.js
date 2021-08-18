import React from "react";

export default function TeamForm(props) {
   const { values, update, submit } = props;
   const onChange = (evt) => {

    const name = evt.target.name;

    const value = evt.target.value

    update(name, value);
   };
   const onSubmit = (evt) => {
       evt.preventDefault();
       console.log("here");

       submit();
   };
   return (
       <form className="form container" onSubmit={onSubmit}>
           <div className="form-group inputs">

           </div>
       </form>
   )
}