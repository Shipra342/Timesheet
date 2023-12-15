import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ShowMemberList from './Component/adminModule/ShowMemberList';
import Dashboard from './Component/Dashboard/dashborad';
import Admin from './Component/adminModule/admin';
import Login from './Component/LoginModule/Login';
import ShowList from './Component/ShowList';
import AddDsr from './Component/AddDsr/AddDsr';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Login />} />
            <Route path="/adminPortal" element={<Admin />} />
            {/* <Route path="/userPortal" element={<User />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/showMemList" element={<ShowMemberList />} />
            <Route path="/showList" element={<ShowList />} />
            <Route path="/addDSR" element={<AddDsr />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
