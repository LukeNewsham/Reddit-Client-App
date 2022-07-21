import React from 'react';



export default function FavoritesButton(props) {

    function wrapper() {
        
        props.handleFavorite();

        try {
            if (window.location.href == 'http://localhost:3000/home') {
                props.addToFavorites(props.article); 
            }
        } catch(err) {
                console.log(err)
            }
        

        try {
            if (window.location.href == 'http://localhost:3000/favorites') {
                props.removeFromFavorites(props.article);
            }   
        } catch(err) {
                console.log(err)
            }
        

    };


    return (   
        <div class='favoritesButton'> 
            <p class='plusButton' onClick={wrapper} articles={props.articles} > + </p>
        </div> 
    )
}