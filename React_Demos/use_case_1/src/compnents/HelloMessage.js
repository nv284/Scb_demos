
import React from "react";
const HelloMessage = ({ name, message = "Hi, Hello" }) => {
  return (
    <div>
      Message from {name} : {message}
    </div>
  );
};

export default HelloMessage;
