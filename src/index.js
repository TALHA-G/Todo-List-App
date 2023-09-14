import React from 'react';
import ReactDOM from 'react-dom/client';
import './Ap.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Ap from "./Ap"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <Router>
    <Ap/>
 </Router>
 </>
);
 
