import React from 'react';
import upArrow from './upArrow.png'

//function class - function classes use hooks
export default function Votes(props) {
    return (
        <div class='stats'>
            <img class='upArrow' src ={upArrow} height = '20rem' alt='UpArrow' />
            <p> {props.post.ups}</p>                 
        </div>
    )
}

