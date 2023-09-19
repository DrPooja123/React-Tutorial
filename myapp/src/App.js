
import './App.css';
//import Home from './components/Home'
import Navbar from './components/Navbar'
import Hooks from './components/Hooks'
import ListDisplay from './components/ListDisplay';
import About from './components/About';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
       </Routes> 
    </div>
  );
}

export default App;
