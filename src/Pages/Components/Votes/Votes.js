import React from 'react';
import upArrow from './upArrow.png'

export default function Votes(props) {
    return (
        <div class='stats'>
            <img class='upArrow' src ={upArrow} height = '20rem' alt='UpArrow' />
            <p> {props.post.data.ups}</p>                 
        </div>
    )
}

