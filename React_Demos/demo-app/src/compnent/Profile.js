import React from 'react';
//Destructuring and using default props + children prop
function Profile({ name, profession = 'Unknown', children }) {
  // Using destructuring and default props (profession)
  return (
    <div className="card p-3 mb-3">
    
      <h3>{name}</h3>
      <p>Profession: {profession}</p>
      <div>{children}</div>
    </div>
  );
}

export default Profile;
