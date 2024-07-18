import React, { useState } from "react";
import Todos from "./components/Todos";
import Form from "./components/Form";

const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    },
    {
      id: 2,
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    },
  ]);

  const [id, setid] = useState("");

  console.log("edit ke liye id aa gai", id);

  // Add a new todo
  const addTodo = (id, title, description) => {
    const obj = {
      id,
      title,
      description,
    };

    if (id != "") {
      console.log(obj);
      setTodo((prevData) =>
        prevData.map((item) => (item.id == id ? { ...item, ...obj } : item))
      );
      // setTodo(()=>)
    } else {
      setTodo([...todo, obj]);
    }

   setid(" ");
  };

  // Delete a todo
  const deleteTodo = (id) => {
    if (confirm("Are you sure you want to delete this todo?")) {
      const filterTodo = todo.filter((item) => item.id != id);
      console.log(filterTodo);
      setTodo(filterTodo);
    }
  };

  return (
    <>
      <Form addTodo={addTodo} todo={todo} id={id} />
      <div>
        <div
          className="btn btn-warning"
          onClick={() =>
            addTodo(6, "Infinity-War", "One of the best marvel movie")
          }
        >
          AddTodo
        </div>

        <Todos setid={setid} todo={todo} deleteTodo={deleteTodo} />
      </div>
    </>
  );
};

export default App;
