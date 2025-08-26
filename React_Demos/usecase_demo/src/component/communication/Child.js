import React from "react";

function Child({ sendMessage }) {
  return (
    <button onClick={() => sendMessage("Hello from Child!")}>
      Send Message to Parent
    </button>
  );
}

export default Child;
