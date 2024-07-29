import React, { useEffect, useState } from "react";

function BasicHooks() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
  }, []);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={handleClick}>Increment</button>
      <h1>rendered {count} times and count  = {count}</h1>
    </>
  );
}

export default BasicHooks;
