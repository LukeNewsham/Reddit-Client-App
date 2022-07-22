import Post from './Components/Post/Post.js';

export default function Favorites({favorites, posts, removeFromFavorites}) {
    return (
        <>
            <div class='homeContainer'>  
                { 
                    (favorites != null) ? favorites.map((favorite, index) => <Post key={favorite.id} post={favorite} favoriteMode='On' removeFromFavorites={removeFromFavorites}/>) : ''  
                }
            </div>
        </>
    )
}