import React from 'react';

export default function FavoritesButton(props) {
    function wrapper() {        
        props.handleFavorite();

        try {
            if (window.location.href == 'http://localhost:3000/home') {
                props.addToFavorites(props.post); 
            }
        } catch(err) {
                console.log(err)
            }        

        try {
            if (window.location.href == 'http://localhost:3000/favorites') {
                props.removeFromFavorites(props.post);
            }   
        } catch(err) {
                console.log(err)
            }      
    };

    return (   
        <div class='favoritesButton' onClick={wrapper}> 
            <p class='plusButton'  posts={props.posts}> 
                { (props.favoriteMode == 'On') ? '-' : '+'}
            </p>
        </div> 
    )
}