import React from 'react';





export default function FavoritesButton(props) {

    function wrapper() {
        props.handleFavorite();
        props.addToFavorites(props.article)
    }

    return (   
        <div class='favoritesButton'> 
            <p class='plusButton' onClick={wrapper} articles={props.articles} > + </p>
        </div> 
    )
}