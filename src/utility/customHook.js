/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";

const useTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count}`;
  }, [count]);

  return [count, setCount];
};

export default useTitle;
