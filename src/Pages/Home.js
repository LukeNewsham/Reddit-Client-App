import Article from './Article/Article';
import React, {useState, useEffect} from 'react';


export default function Home({articles, addToFavorites,favoriteMode}) {

    
    
    return (
        <> 
        <div class='homeContainer'>  
             
            { 
                (articles != null) ? articles.map((article) => <Article key={article.data.id} article={article.data} addToFavorites={addToFavorites}/>) : ''  
            }
            
        </div>
        </>
    )
}