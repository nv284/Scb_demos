
import './App.css';
import DynamicList from './component/customers/DynamicList';
import CustomerList from './component/customers/CustomerList';
import CustomerList1 from './component/customers/CustomerList1';
import Child from './component/communication/Child';
import Parent from './component/communication/Parent';
function App() {
  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>

       <h1>Welcome to the Customer Directory</h1>
      <CustomerList />
     <DynamicList />
     <CustomerList1 />

     <Child message="Hello From Parent !!!" />
     <Parent />
    </div>
  );
}

export default App;
