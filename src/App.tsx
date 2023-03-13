import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { SignUp} from './pages/SignUp';

const ReactSignUpApp= () => {
  return (
    <>      
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
);
}

export default ReactSignUpApp;
