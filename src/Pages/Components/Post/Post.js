import FavoritesButton from '../FavoritesButton/FavoritesButton.js';
import PostContent from '../PostContent/PostContent.js';
import Votes from '../Votes/Votes.js';
import React, {useState} from 'react';

export default function Post(props) {
    const [favoriteMode, setFavoriteMode] = useState(props.post.favorited);

    //Function: switches favoriteMode state of selected post to either on of ''
    function handleFavorite() {        
        (favoriteMode === '') ? setFavoriteMode('On') : setFavoriteMode('');        
    }

    return (
        <div class='postContainer' favoriteMode = {favoriteMode} >
            <Votes post={props.post.data} />  
            <PostContent post={props.post.data} />
            <FavoritesButton favoriteMode={favoriteMode} post={props.post} handleFavorite={handleFavorite} addToFavorites={props.addToFavorites} removeFromFavorites={props.removeFromFavorites}/>
        </div>
    );    
}






