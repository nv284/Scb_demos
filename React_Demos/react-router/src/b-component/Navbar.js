import React from "react";

import {Link} from 'react-router-dom';

const Navbar=()=>(
    <nav style={{padding:'10x' , background:'#eee'}}>
    <Link to="/dashboard">Dashboard</Link> |{' '}
    <Link to="/balance">Balance</Link> |{' '}
    <Link to="/loan">Loan</Link> |{' '}
    <Link to="/cards">Cards</Link> |{' '}
    <Link to="/fd">Fixed Deposit</Link>
    </nav>
);

export default Navbar;