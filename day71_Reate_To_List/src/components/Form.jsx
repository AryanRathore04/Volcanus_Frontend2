import React, { useEffect, useState } from "react";

const Form = ({ addTodo, id, todo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");



  useEffect(() => {

    const temp = todo.filter((item) => item.id == id);
    console.log("edited todo", temp)

    setTitle(temp[0]?.title);
    setDescription(temp[0]?.description);

  
    
  }, [id])
  

  const submitHandler = (e) => {
   if(id != ""){
     e.preventDefault();
    alert("Your Todo has been added successfully!...");
    addTodo(id, title, description);

    setTitle("");
    setDescription("");
  }else{
     e.preventDefault();
     alert("Your Todo has been added successfully!...");
     addTodo(Math.random(), title, description);

     setTitle("");
     setDescription("");
  }
};

  return (
    <>
      <div className="container text-center my-5">
        <form onSubmit={submitHandler}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          {id != "" && <button className="btn bg-warning mx-3">Submit</button>}
          {id != "" && <button className="btn bg-warning mx-3">Edit</button>}
        </form>
      </div>
    </>
  );
};

export default Form;
