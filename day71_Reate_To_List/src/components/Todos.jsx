import React, { useState } from "react";

const Todos = ({ todo, deleteTodo, setid }) => {
  return (
    <div className="container">
      {todo.map((e) => (
        <div key={e.id} className=" rupali bg-dark p-3 my-3 text-center">
          <h1>{e.title}</h1>
          <p>{e.description}</p>
          <h3>{e.id}</h3>
          <div>
            <button className="btn btn-primary mx-2" onClick={() => setid(e.id)}>Edit</button>
            <button className="btn btn-danger" onClick={() => deleteTodo(e.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
