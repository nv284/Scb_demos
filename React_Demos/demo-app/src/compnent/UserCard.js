import React from 'react';
//Passing props normally & destructuring props
function UserCard(props) {
  // Using props without destructuring
  return (
    <div className="card p-3 mb-3">
       
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default UserCard;
