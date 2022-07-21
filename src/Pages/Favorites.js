import Article from './Article/Article';
import React, {useState, useEffect} from 'react';


export default function Favorites({favorites, articles, removeFromFavorites}) {

    
    
    return (
        <>
        <div class='homeContainer'>  
            
            { 
                (favorites != null) ? favorites.map((favorite, index) => <Article key={favorite.id} article={favorite} favoriteMode='On' removeFromFavorites={removeFromFavorites}/>) : ''  
            }
        </div>
        </>
    )
}