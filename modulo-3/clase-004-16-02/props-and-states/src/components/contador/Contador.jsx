import React, { useState } from 'react';

const Contador = () => {
  const [ count, setCount ] = useState(0);
  const [name, setName] = useState()
  console.log('Soy el contador comp');
  return (
    <div>
      <h1>Contador: {count}</h1>
      <button className='btn btn-danger' onClick={() => {
        setCount(count + 1);
      }}>Incrementar</button>
      <button className='btn btn-success ms-2' onClick={() => {
        setCount(0);
      }}>Resetear</button>
      <hr />
      <h1>Nombre: {name}</h1>
      <input type="text" className="mt-2" onChange={(e) => {
        setName(e.target.value);
      }} />
    </div>
  );
};

export default Contador