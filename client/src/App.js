import './App.css';
import Navbar from './components/Navbar'
import AllRoutes from './AllRoutes';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <AllRoutes />
    </Router>
   </div>
  );
}

export default App;
