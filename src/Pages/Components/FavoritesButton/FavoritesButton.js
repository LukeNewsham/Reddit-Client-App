import React from 'react';

export default function FavoritesButton(props) {

    //Wrapper function so multiple functions can be called with onClick
        //Triggers handleFavorite function 
        //Triggers either addToFavorite or removeFromFavorite 
    function wrapper() {        
        props.handleFavorite();
        try {
            if (props.post.favorited === '') {
                props.addToFavorites({
                    ...props.post, favorited: 'On'}); 
            }
        } catch(err) {
                console.log(err)
        };      

        try {
            if (props.post.favorited === 'On') {
                props.removeFromFavorites({
                    ...props.post, favorited: ''}); 
            }   
        } catch(err) {
                console.log(err)
        };      
    };

    return (   
        <div class='favoritesButton' onClick={wrapper}> 
            <p class='plusButton'  posts={props.posts}> 
                { (props.favoriteMode === 'On') ? '-' : '+'}
            </p>
        </div> 
    )
}