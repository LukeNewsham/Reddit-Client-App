import Post from './Components/Post/Post.js';

export default function Home({posts, addToFavorites}) {
    return (
        <> 
            <div class='homeContainer'>
                { 
                    (posts != null) ? posts.map((post) => <Post key={post.data.id} post={post.data} addToFavorites={addToFavorites}/>) : ''  
                }                
            </div>
        </>
    )
}