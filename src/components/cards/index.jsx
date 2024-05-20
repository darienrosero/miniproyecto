// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'

const Card = ({ img, superHost, cualyties, beds, calification, place }) => {
    return (
        <div className='card'>
            <img src={img} className='pictureStays' />
            <div id='information'>
                 {superHost && <div id='superHost'> <p> SUPER HOST</p></div>}
                <div id='cualyties'><p>{cualyties} {beds} </p></div>
                <div id='calification'> <p><img id='star' src="src/logos/star-solid.svg" /> {calification} </p></div>
                <div id='place'> <p> {place} </p></div>
            </div>
        </div>
    )
}

export default Card
