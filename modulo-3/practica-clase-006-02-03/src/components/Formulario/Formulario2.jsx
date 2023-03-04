import React, { useState } from 'react'

const Formulario2 = () => {
  const [todo, setTodo] = useState({
    todoNombre: '',
    todoDescripcion: '',
    todoEstado: 'pendiente'
  });

  // const obj1 = {a: 1, b:2};
  // const obj2 = { ...obj1, a: 3}
  // console.log(obj2);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
  }

  const handleChange = (e) => {
    console.log(e.target.name);
    setTodo((prev) => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }

  return (
    <div className="container mt-2">
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="text" placeholder="Ingrese un TODO" name="todoNombre" value={todo.todoNombre} onChange={handleChange} />
        <textarea className="form-control mb-2" type="text" placeholder="Ingrese un TODO" name="todoDescripcion" value={todo.todoDescripcion} onChange={handleChange} />
        <select className="form-control mb-2" name="todoEstado" value={todo.todoEstado} onChange={handleChange} >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <button className="btn btn-primary" type="submit">Agregar</button>
      </form>
    </div>
  )
}

export default Formulario2