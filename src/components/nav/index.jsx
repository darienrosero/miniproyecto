// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './style.css'

const Nav = () => {

    const [location, setLocation] = useState([])
    const [guest, setGuest] = useState([])
    const [data, setData] = useState([])

  

    const cambioLocation = async(e) => {
      setLocation(e.target.value);
    };

    const cambioGuest = async (e) => {
      setGuest(e.target.value);
    };

    const buttonSearch = async () =>{
      console.log(location)
      console.log(guest)


    }

  return (
    <nav className='nav'>

      <img src="/logos/logo.png" alt="" className='navLogo' />

      <div className='serch'>

        <input id='location' className='buttonSerch' placeholder="Ubicación" value={location} onChange={cambioLocation}/>
        <input id='guest' type='number' min={0} className='buttonSerch' placeholder="Add guests" value={guest} onChange={cambioGuest}/>
        <button id='confirm' className='buttonSerch' onClick={buttonSearch}> <img src="/logos/search.png" /></button>

      </div>
    </nav>
  )
}

export default Nav
