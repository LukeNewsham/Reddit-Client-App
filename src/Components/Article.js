import React from 'react';


export default function Article(props) {
    return (
        <div class='articleContainer'>
            <div class='stats'>
                <p> {'Upvotes: ' + props.article.ups}</p>                 
            </div>

            <div class='info'> 
                <a href={"https:/www.reddit.com" + props.article.permalink}> 
                    <h1> {props.article.title} </h1>
                </a>                
                <img width ='100%' src={props.article.url} alt=''/>  
                <p class='author'>{'by ' + props.article.author}</p>    
            </div>
            
        </div>
    )
}