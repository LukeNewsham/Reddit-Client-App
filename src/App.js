import './App.css';
import Navbar from './Navbar/Navbar.js';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import About from './Pages/About';
import {Route, Routes} from "react-router-dom";

function App() {
  return ( 
    <>     
      <Navbar />
      <div className='mainContainer'> 
        <Routes>
          <Route path="/home" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/favorites" element = {<Favorites />} />
          

        </Routes>
      </div>
    </>
    
  )
}

export default App;
