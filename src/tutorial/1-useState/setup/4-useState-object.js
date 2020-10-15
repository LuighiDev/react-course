import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Luighi",
    age: 30,
    message: "Hola buapeton",
  });

  const [name, setName] = useState("Luighi");
  const [age, setAge] = useState(30);
  const [message, setMessage] = useState("Hola buapeton");

  const changeMessage = () => {
    // setPerson({ ...person, message: "hello world" });
    setMessage("hello world");
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
