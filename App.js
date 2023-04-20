import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Login from './components/Login'
import Home from './components/Home';
import About from './components/About';
import Addpost from './components/Addpost';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          
          {/* <Route path='/' element={<Addpost/>}/> */}


        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
