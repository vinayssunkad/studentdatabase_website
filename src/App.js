
import './App.css';
import { Route,Routes } from 'react-router-dom';
// import background from '../src/image/images.jpg';
import About from './About';
import Api from './Api';
import Copyright from './Copyright';
import Nav from './Navbar';

function App() {


return (
  <div>
     <Routes>
      <Route path='/' element={<Nav/>}></Route>
    //  <Route path='/' element={<Copyright/>} ></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/api' element={<Api/>} ></Route>
     </Routes> 
  <div className="App">
    {/* <Nav/> */}
    </div>
    </div>
         
  );
}

export default App;
