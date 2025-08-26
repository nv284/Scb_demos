import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [childMsg, setChildMsg] = useState('');

  const handleChildMessage = (msg) => {
    setChildMsg(msg);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <Child sendMessage={handleChildMessage} />
      <p>Message from Child: {childMsg}</p>
    </div>
  );
}

export default Parent;