import Post from './Components/Post/Post.js';

export default function Favorites({favorites, removeFromFavorites}) {
    return (
        <>
            <h1> Favorites </h1>  
            <div class='homeContainer'>  
                { 
                    (favorites != null) ? favorites.map((favorite) => <Post key={favorite.data.data.id} post={favorite} removeFromFavorites={removeFromFavorites}/>) : ''  
                }
            </div>
        </>
    )
}