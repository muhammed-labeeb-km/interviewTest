import React, { useState } from 'react';
import Home from './Pages/Home';
import Update from './Pages/Update';
import Delete from './Pages/Delete';
import { Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate from react-router-dom
import Decide from './Pages/Decide';
import Items from './Pages/Items';
import Denied from './Pages/Denied';

function App() {
  const token = sessionStorage.getItem('Token');

  return (
    <Routes>
      <Route path='/' element={<Home />}> </Route>
      
      
      {token ? (
        <>
          <Route path='/update' element={<Update />} />
          <Route path='/delete' element={<Delete />} />
          <Route path='/decide' element={<Decide />} />
          <Route path='/item' element={<Items />} />
        </>
      ) : (
        <Route path='*' element={<Denied />} /> 
      )}
    </Routes>
  );
}

export default App;
