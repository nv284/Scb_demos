import React from "react";
import { useState, useEffect } from 'react';

const Counter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <div>Time Elapsed : {seconds}</div>;
};

export default Counter;
