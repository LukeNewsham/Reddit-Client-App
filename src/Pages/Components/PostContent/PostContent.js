import React from 'react';

export default function PostContent(props) {
    return (
        <>
            <div class='info'> 
                <a href={"https:/www.reddit.com" + props.post.permalink}> 
                    <h1> {props.post.title} </h1>
                </a>                
                <img width ='100%' src={props.post .url} alt=''/>
                <p class='author'>{'by ' + props.post.author}</p> 
                <p class='subreddit'>{'Subreddit: ' + props.post.subreddit}</p>                 
            </div>

            
        </>
    )
}

