import './App.css';
import AddCustomerForm from './component/AddCustomerForm.js';
import NewForm from './component/NewForm.js';
function App() {
  return (
    <div className="App">
   <h2> Customer Details </h2>

<NewForm />

   <AddCustomerForm />
    </div>
  );
}

export default App;
