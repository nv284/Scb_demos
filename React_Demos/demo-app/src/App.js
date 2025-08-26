import './App.css';
import Message from './compnent/Message';
import Hello from './compnent/Hello';
import Greeting from './compnent/Greeting';
import UserCard from './compnent/UserCard';
import Profile from './compnent/Profile';

function App() {
  return (
    <div>
   <Message />{/**component without the props */}
   <Hello />
   <Greeting name="Alice"/>{/*component within the props*/}
   <Greeting name="Bob"/>

   <div className="col-md-6">
          <UserCard name="Alice" age={25} />
          
        </div>
         <div className="col-md-6">
          <Profile name="Charlie" />
        </div>
    </div>
  );
}

export default App;
