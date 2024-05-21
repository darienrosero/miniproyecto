// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'

const Card = ({ info}) => {
    return (
        <div className='card'>
            <img src={info.photo} className='pictureStays' />
            <div id='information'>
                 {info.superHost && <div id='superHost'> <p> SUPER HOST</p></div>}
                <div id='cualyties'><p>{info.type} {info.beds} </p></div>
                <div id='calification'> <p><img id='star' src="logos/star-solid.svg" /> {info.rating} </p></div>
                <div id='place'> <p> {info.title} </p></div>
            </div>
        </div>
    )
}

export default Card

