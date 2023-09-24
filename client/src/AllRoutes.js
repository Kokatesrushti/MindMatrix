import React,{useState} from 'react'

// import TestList from './Pages/TestList';
import Login from './Pages/Login';
import { Routes,Route} from 'react-router-dom';
import Register from './Pages/Register';
import AdminPanel from './Pages/AdminPanel';
import Home from './Pages/Home';
import Test from './Pages/Test';
import TestPageSelector from './TestPageSelector';
import TestQuestions from './TestQuestions';

function AllRoutes() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Routes >
        {/* <Route path='/' element = {<TestList/>} /> */}
        <Route path='/' element = {<Home/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path='/admin' element={<AdminPanel loggedIn={loggedIn}/>} />
        {/* <Route path="/test/:testAlias" element={<TestPage />} /> */}
        <Route path="/test" element={<Test />} />
        <Route path="/test/:id" element={<TestPageSelector />} />
        <Route path="/test/:id/:subtestId" element={<TestQuestions/>} />
        {/* <Route path="/test/:id/:testAlias" element={<TestPage />} /> */}
    </Routes>
  )
}






export default AllRoutes