import Post from './Components/Post/Post.js';

export default function Home({posts, addToFavorites, removeFromFavorites}) {
    return (
        <> 
         <h1> Search Results</h1>    
            <div class='homeContainer'>                
                { 
                    (posts != null) ? posts.map((post) => <Post key={post.data.data.id} post={post} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} />) : ''  
                }                
            </div>
        </>
    )
}