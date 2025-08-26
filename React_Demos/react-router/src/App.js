import './App.css';
import {BrowserRouter , Routes , Route , Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Signin from './b-component/Signin'
import Signup from './b-component/Signup';
import Dashboard from './b-component/Dashboard';
import Balance from './b-component/Balance';
import Loan from './b-component/Loan';
import Cards from './b-component/Cards';
import FixedDeposit from './b-component/FixedDeposit';
import Navbar from './b-component/Navbar';
import UserDetails from './nested_dynamic_route/UserDetails';
import UserPosts from './nested_dynamic_route/UserPosts';
import Users from './nested_dynamic_route/Users';
function App() {
  return (
     <BrowserRouter>
     {/*   <nav>
            <Link to="/">Home</Link><br/>
            <Link to="/about">About</Link><br />
            <Link to="/services">Services</Link>
          </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes> */}
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/fd" element={<FixedDeposit />} />

      <Route path="/users" element={<Users />} />
      <Route path="/users/:userId" element={<UserDetails />}>
        {/* Nested Route */}
        <Route path="posts" element={<UserPosts />} />
      </Route>

      </Routes>



     </BrowserRouter>


    
  );
}

export default App;
