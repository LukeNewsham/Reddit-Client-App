import Article from '../Components/Article';


export default function Home({articles}) {
    
    return (
        <>
        {console.log(articles)}
        {/* <p> {'Subreddit subscribers: ' + articles[0].data.subreddit_subscribers }</p> */}
        <div class='homeContainer'>    
            {  
                (articles != null) ? articles.map((article, index) => <Article key={index} article={article.data}/>) : ''  
            }
        </div>
        </>
    )
}