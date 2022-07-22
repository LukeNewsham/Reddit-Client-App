import FavoritesButton from '../FavoritesButton/FavoritesButton.js';
import PostContent from '../PostContent/PostContent.js';
import Votes from '../Votes/Votes.js';
import React, {useState} from 'react';


export default function Post(props) {
    const [favoriteMode, setFavoriteMode] = useState(props.favoriteMode);

    function handleFavorite() {        
        (favoriteMode === 'On') ? setFavoriteMode('') : setFavoriteMode('On');
    }
     
    return (
        <div class='postContainer' favoriteMode = {favoriteMode} >
            <Votes post={props.post} />  
            <PostContent post={props.post} />
            <FavoritesButton favoriteMode={favoriteMode} post={props.post} handleFavorite={handleFavorite} addToFavorites={props.addToFavorites} removeFromFavorites={props.removeFromFavorites}/>
        </div>
    );
    
}






