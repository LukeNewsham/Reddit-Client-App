import React from 'react';


export default function Article(props) {
    return (
        <div class='articleContainer'>
            <a href={"https:/www.reddit.com" + props.article.permalink}> 
                <h1> {props.article.title} </h1>
            </a>
            <p> {'Subscribers: ' + props.article.subreddit}</p>
            <p>{props.article.author}</p>
            <p> {'Upvotes: ' + props.article.ups}</p>            
            
            {/* <h1> {JSON.parse(props.article)} </h1> */}
        </div>
    )
}