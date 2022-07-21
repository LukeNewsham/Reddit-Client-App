import FavoritesButton from './FavoritesButton/FavoritesButton.js';
import PostContent from './PostContent/PostContent.js';
import Votes from './Votes/Votes.js';
import React, {useState, useEffect} from 'react';


export default function Article(props) {

    const [favoriteMode, setFavoriteMode] = useState(props.favoriteMode);

    function handleFavorite() {        
        setFavoriteMode('On');
           
    }

     
    return (
        <div class='articleContainer' favoriteMode = {favoriteMode} >

            <Votes article={props.article} />  
            <PostContent article={props.article} />
            <FavoritesButton article={props.article} handleFavorite={handleFavorite} addToFavorites={props.addToFavorites} removeFromFavorites={props.removeFromFavorites}/>
        
        </div>
    );
    
}






