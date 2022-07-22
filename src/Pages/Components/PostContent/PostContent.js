import React from 'react';

export default function PostContent(props) {
    return (
        <>
            <div class='info'> 
                <a href={"https:/www.reddit.com" + props.post.data.permalink}> 
                    <h2> {props.post.data.title} </h2>
                </a>                
                <img width ='100%' src={props.post.data.url} alt=''/>
                <p class='author'>{'by ' + props.post.data.author}</p> 
                <p class='subreddit'>{'Subreddit: ' + props.post.data.subreddit}</p>                 
            </div>
        </>
    )
}

