
// import Home from '@mui/icons-material/Home';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './routes/Home';
import Services from './routes/Services';
import About from './routes/About';
import Signup from './routes/Signup';
import Login from './routes/Login';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      

      
      
      
    </div>
  );
}

export default App;
