import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({ firstName: "John", lastName:"Doe", age: 100 });
  const fullName = person.firstName + " " + person.lastName;

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };
  
  const handleNameChange=(index,e)=>{
   const value = e.target.value;
    if(index===0){
      setPerson({...person,firstName:value});
    }
  else if(index===1){
    setPerson({...person,lastName:value});
  }};



  

  return (
    <>
      <label>First Name</label>
      <input value={person.firstName} onChange={(e)=>{handleNameChange(0,e)}}></input>
      <label>Last Name</label>
      <input value={person.lastName}  onChange={(e)=>{handleNameChange(1,e)}}></input>
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}
