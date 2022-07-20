import './App.css';
import Navbar from './Navbar/Navbar.js';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import About from './Pages/About';
import {Route, Routes} from "react-router-dom";
import React, {useState, useEffect} from 'react';


function App() {
    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState(['bananas']);


  useEffect(() => {
    fetch("https://www.reddit.com./r/bananas.json").then(res => {
       if (res.status != 200) {
        console.log('Error: Link not found!');
        return
      }
      res.json().then(data => {
        if (data != null) {
          setArticles(data.data.children);
        }
      })
    })
  }, [search]);


  return ( 
    <>     
      <Navbar />
      
      <div className='mainContainer'> 
      <input type='text' className='search' placeholder='Search' />       
        <Routes>
          <Route path="/home" element = {<Home articles={articles} />} />
          <Route path="/about" element = {<About />} />
          <Route path="/favorites" element = {<Favorites />} />
        </Routes>
      </div>
    </>
    
  )
}

export default App;
