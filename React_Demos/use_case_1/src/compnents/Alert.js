import React from "react";

const Alert = () => {
  const handleClick = () => {
    alert('React is a great UI library');
  };

  return <button onClick={handleClick}>Click me Please</button>;
};

export default Alert;
