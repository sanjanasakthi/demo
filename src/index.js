import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LOGIN/LoginPage';
import ChemistSignUpPage from './CHEMIST/ChemistSignup';
import Fetchtable from './LOGIN/LoginFetch';
import FetchtableId from './LOGIN/Loginfetchid';
import Operator from './OPERATOR/Operator';
import Admin from './ADMIN/Admin';
import Chemist from './CHEMIST/Chemist';
import DashBoard from './ADMIN/DashBoard';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  {/* <Tryit/> */}
    <BrowserRouter>
      {/* <Operator/> */}
      <Routes>
      <Route path='/' element={<App/>}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<ChemistSignUpPage />} />
        <Route path='/fetchtable' element={<Fetchtable />} />
        <Route path='/fetchtableid' element={<FetchtableId />} />
        <Route path='/operator' element={<Operator/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/chemist' element={<Chemist/>} />
        <Route path='/dashboard' element={<DashBoard/>} />


        

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

