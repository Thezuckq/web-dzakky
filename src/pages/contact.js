/* eslint-disable */
import React, { useState } from "react";
import useTitle from "../utility/customHook";
import ThemeContext from "../utility/customHook";

const Contact = () => {
  const [count, setCount] = useTitle();
  const [myNumber, setMyNumber] = useState(0);

  return (
    <div>
      <h1> Welcome to Contact Page</h1>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
      <button
        type="button"
        onClick={() => {
          setMyNumber(myNumber + 1);
        }}
      >
        Click My Number
      </button>
      <h2>{myNumber}</h2>
    </div>
  );
};

export default Contact;
