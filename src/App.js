import './App.css';
import Navbar from './Navbar/Navbar.js';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import About from './Pages/About';
import {Route, Routes} from "react-router-dom";
import React, {useState, useEffect} from 'react';


function App() {
    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState('popular');
    const [favorites, setFavorites] = useState([])


  useEffect(() => {
    console.log(search)
    fetch("https://www.reddit.com./r/" + search + ".json").then(res => {
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


  function addToFavorites(article) {    
    let favoritedArticles = favorites;    
    for (let i = 0; i < favoritedArticles.length; i++) {      
      if (favoritedArticles[i].title === article.title ) {
        return
      }
    }
    setFavorites((prev) => [...prev, article])
  }

  function removeFromFavorites(article) { 

    let favoritedArticles = favorites;
    let newFavoritedArticles = favoritedArticles.filter(favorited => favorited.title !== article.title)
    setFavorites(newFavoritedArticles)


  }


  return ( 
    <>     
      <Navbar />
      
      <div className='mainContainer'> 
      <input type='text' className='search' placeholder='Search' value={search} onChange={e => setSearch(e.target.value)} />       
        <Routes>
          <Route path="/home" element = {<Home articles={articles} addToFavorites={addToFavorites}/>} />
          <Route path="/about" element = {<About />} />
          <Route path="/favorites" element = {<Favorites articles={articles} favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
        </Routes>
      </div>
    </>
    
  )
}

export default App;
