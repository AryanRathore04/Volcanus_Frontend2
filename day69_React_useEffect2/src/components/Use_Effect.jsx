import React, { useEffect, useState } from "react";

const Use_Effect = () => {
  const [counter, setcounter] = useState(0);


  useEffect(() =>{
    document.title = `Counter = ${counter}`;
  }, [counter])
  
  return (
    <>
      <h1>Counter = {counter}</h1>
      <button onClick={() => setcounter(counter +1)}>Increase</button>
      <button onClick={() => setcounter(counter - 1)}>Decrease</button>
    </>
  );
};

export default Use_Effect;
