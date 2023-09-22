import React,{useState} from 'react'
import TestList from './Pages/TestList';
import Login from './Pages/Login';
import { Routes,Route} from 'react-router-dom';
import Register from './Pages/Register';
import AdminPanel from './Pages/AdminPanel';
import TestPage from './Pages/TestPage';

function AllRoutes() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Routes >
        <Route path='/' element = {<TestList/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path='/admin' element={<AdminPanel loggedIn={loggedIn}/>} />
        <Route path="/test/:testAlias" element={<TestPage />} />
    </Routes>
  )
}

export default AllRoutes