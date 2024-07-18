import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert(`name: ${name},<br />email: ${email},<br />password: ${password}`);

    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <h1>Form Handling</h1>

      <form onSubmit={onSubmitHandler}>
        <h3>
          name:{" "}
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          />
        </h3>
        <br />
        <br />
        <h3>
          email:{" "}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
          />
        </h3>
        <br />
        <br />
        <h3>
          password:{" "}
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="text"
          />
        </h3>
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
