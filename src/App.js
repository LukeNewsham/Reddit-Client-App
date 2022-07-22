import './App.css';
import Navbar from './Pages/Components/Navbar/Navbar.js';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import About from './Pages/About';
import {Route, Routes} from "react-router-dom";
import React, {useState, useEffect} from 'react';


function App() {
    const [posts, setPosts] = useState([]);
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
          setPosts(data.data.children);
        }
      })
    })
  }, [search]);


  function addToFavorites(post ) {    
    let favoritedPosts = favorites;    
    for (let i = 0; i < favoritedPosts.length; i++) {      
      if (favoritedPosts[i].title === post.title ) {
        return
      }
    }
    setFavorites((prev) => [...prev, post])
  }

  function removeFromFavorites(post) { 

    let favoritedPosts = favorites;
    let newFavoritedPosts = favoritedPosts.filter(favorited => favorited.title !== post.title)
    setFavorites(newFavoritedPosts)


  }


  return ( 
    <>     
      <Navbar />
      
      <div className='mainContainer'> 
        <input type='text' className='search' placeholder='Search' value={search} onChange={e => setSearch(e.target.value)} />       
        <Routes>
          <Route path="/home" element = {<Home posts={posts} addToFavorites={addToFavorites}/>} />
          <Route path="/about" element = {<About />} />
          <Route path="/favorites" element = {<Favorites posts={posts} favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
        </Routes>
      </div>
    </>
    
  )
}

export default App;
