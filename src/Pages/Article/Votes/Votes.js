import React from 'react';

//function class - function classes use hooks
export default function Votes(props) {
    return (
        <div class='stats'>
            <p> {'Upvotes: ' + props.article.ups}</p>                 
        </div>
    )
}

