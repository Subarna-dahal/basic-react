import { useState } from "react";

const SubmitForm = () => {
  const [inputdata, setinputData] = useState({
    name: "",
    age: 0,
    drinks: [],
    BirthDate: "",
  });
  return (
    <div>
      <form>
        <label>Name:</label>
        <input 
        placeholder="Enter your name"
        onChange={(e)=>setinputData((prev)=>({...prev,name:e.target.value}))}
        />
        <label>How old are you</label>
      <input 
      placeholder="Enter your Age"
      type="range"
      min="0"
      max="100"
      step="1"

      onChange={(e)=>setinputData((prev)=>({...prev,age:Number(e.target.value)}))}/>  
           
      </form>
    </div>
  );
};

export default SubmitForm;
