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
             {/*////////3 Text Inputs Specified Below//////*/}
             <label>
                 Name
                 <input
                     type="text"
                     name="name"
                     value={values.name}
                     placeholder="Type in a name"
                     maxLength="30"
                     onChange={onChange}
                     />
             </label>
             <label>
               Email
                 <input 
                     type="email"
                     name="email"
                     value={values.email}
                     maxLength="50"
                     placeholder="Type in an email"
                     onChange={onChange}
                     />
             </label>
             <label>
               Role
                 <select value={values.role} name="role" onChange={onChange}>
                 <option value="">-- Select a Role --</option>
                 <option value="Frontend Engineer">Frontend Engineer</option>
                 <option value="Backend Engineer">Backend Engineer</option>
                 <option value="Designer">Designer</option>
                 <option value="Team Leader">Team Leader</option>
                 </select>
             </label>
             <div className="submit">
                 <button>Submit</button>
             </div>
           </div>
       </form>
   )
}