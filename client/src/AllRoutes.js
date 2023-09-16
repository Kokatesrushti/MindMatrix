import React from 'react'
import TestList from './Pages/TestList';
import Login from './Pages/Login';
import { Routes,Route} from 'react-router-dom';
import Register from './Pages/Register';

function AllRoutes() {
  return (
    <Routes >
        <Route path='/' element = {<TestList/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default AllRoutes