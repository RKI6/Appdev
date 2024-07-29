import React, { useState } from "react";
const withAdding = (fn) => {
  return (...args) => { //destructure the args from the function add
    console.log("args", args);
    return fn(...args);
  };
};
const add = (a, b) => a + b;
const withAdd = withAdding(add);
export default function HOF() {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    const sum = withAdd(2, 3);
    setValue(sum);
  };
  return <button onClick={handleClick}>{value}</button>;
}


/*
    FLOW
    button click -> handleClick -> withAdd(2,3) -> withAdding(add) -> 
                                                              /
                                                            withAdd(2,3)
 */
