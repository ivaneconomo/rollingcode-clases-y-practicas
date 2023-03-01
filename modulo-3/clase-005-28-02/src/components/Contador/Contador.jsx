import React, { useState, memo, useEffect } from "react";

const Contador = ({data}) => {
  const [count, setCount] = useState(0);
  console.log(data);

  useEffect(() => {
    
    console.log('Se ejecutó el useEffect.');
  
    return () => {
      
    }
  }, [count, data])
  

  return (
    <>
      <div>
        <h1>Contador useState: {count}</h1>
        <button onClick={() => {
          setCount(count + 1);
        }}>Aumentar</button>
        <button onClick={() => {
          setCount(0);
        }}>Reset contador</button>
      </div>
      <Contador2/>
    </>
  );
};

const Contador2 = memo(() => {
  return (
    <>
      <h1>Contador 2</h1>
    </>
  );
});

export default Contador;