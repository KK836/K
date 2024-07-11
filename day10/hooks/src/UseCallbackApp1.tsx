import { useEffect, useState, useCallback } from "react";

function UseCallbackApp1() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(0);


const someFunctiong = useCallback(() => {
  console.log("someFunc: number: ", number);
  return 
} , []);

  useEffect(() => {
    console.log("랜더링");
    [someFunctiong];
  });
  

  return (
    <div>
      <input type="number" , value={number} onChange={(e) =>{setNumber(number(e.target.value))}}/>
      <br />
      <button onClick={someFunctiong}>Call someFunc</button>
      <button onClick={()=> setToggle(!toggle)}>{toggle.toString()}</button>
    </div>
  );
}

export default UseCallbackApp1;
