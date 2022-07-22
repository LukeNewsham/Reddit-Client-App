import './App.css';
import Navbar from './Pages/Components/Navbar/Navbar.js';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import About from './Pages/About';
import {Route, Routes} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import RedditApi from './RedditApi.js'


function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('popular');
  const [favorites, setFavorites] = useState([])

  //When the search bar changes, trigger this effect to fetch new data from Reddit API
  useEffect(() => RedditApi(search, setPosts), [search]);

  //Function: Adds selected post to favorites state.
     //Cycles through favorites state array and checks if selected post matches any. If not, add to state
     //Finds the index of the selected post in the posts state array. 
        //This is because the new post includes Favorited: 'On'
  function addToFavorites(post) { 
    for (let i = 0; i < favorites.length; i++) {      
      if (favorites[i].data.data.title === post.data.data.title ) {
        return
      }
    }
    setFavorites((prev) => [...prev, post])
    let postIndex = posts.findIndex(el => {
      console.log(post)
      if (el.data.data.title === post.data.data.title) {
        console.log(el)
        return true;
      }
      return false;
    })    
    posts[postIndex] = post    
  }

  //Function: Removes selected post to favorites state.
     //Cycles through favorites state array and filters out the selected post
     //Finds the index of the selected post in the posts state array. 
        //This is because the new post includes Favorited: ''
  function removeFromFavorites(post) {     
    let newFavoritedPosts = favorites.filter(favorited => favorited.data.data.title !== post.data.data.title)
    setFavorites(newFavoritedPosts);
    let postIndex = posts.findIndex(el => {
      console.log(post)
      if (el.data.data.title === post.data.data.title) {
        return true;
      }
      return false;
    })    
    posts[postIndex] = post
  }

  //Everything in return is rendered
  return ( 
    <>     
      <Navbar />      
      <div className='mainContainer'> 
        <input type='text' className='search' placeholder='Search' value={search} onChange={e => setSearch(e.target.value)} />       
        <Routes>
          <Route path="/" element = {<Home posts={posts} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>} />
          <Route path="/about" element = {<About />} />
          <Route path="/favorites" element = {<Favorites posts={posts} favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
        </Routes>
      </div>
    </>    
  )
}

export default App;
