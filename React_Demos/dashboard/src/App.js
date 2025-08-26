
import './App.css';
import Dashboard from './comp/Dashboard';
import SipCalculator from './comp/SipCalculator';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">🏦 My Banking Dashboard</h1>
      <Dashboard />
      <SipCalculator />
    </div>
  );
}

export default App;
