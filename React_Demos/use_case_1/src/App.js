
import './App.css';
import HelloWorld from './compnents/HelloWorld';
import HelloMessage from './compnents/HelloMessage';
import Counter from './compnents/Counter';
import Alert from './compnents/Alert';

function App() {
 const containerStyle = {
    marginLeft: '100px',
    marginRight: '100px',
    border: '1px solid #ccc',
    padding: '20px',
    fontFamily: 'Arial'
  };

  const sectionStyle = {
    marginTop: '20px'
  };

  return (
    <div style={containerStyle}>
      <h3>UseCase 1 - Components, Props and States</h3>
      <hr />

      <div style={sectionStyle}>
        <HelloWorld />
      </div>

      <div style={sectionStyle}>
        <b>Single Prop</b>
        <div><HelloMessage name="Euler" /></div>
      </div>

      <div style={sectionStyle}>
        <b>Multiple Props</b>
        <div><HelloMessage name="Ramanujam" message="I got this in my dreams" /></div>
      </div>

      <div style={sectionStyle}>
        <b>State and Virtual DOM</b>
        <div><Counter /></div>
      </div>

      <div style={sectionStyle}>
        <b>Interactive Component - Event Handling</b>
        <div><Alert /></div>
      </div>
    </div>
  );
};


export default App;
