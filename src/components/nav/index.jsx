// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './style.css'

const Nav = ({data, setFilter}) => {

    const [location, locationSearch] = useState('')
    const [guests , setGuests] = useState('')

    function filterData() {
      const rs = data.filter(info => {

        const locationSearch = location === '' || info.city.toLowerCase() === location.toLowerCase()
        const guestsSearch = info.maxGuests >= guests
        return locationSearch && guestsSearch

      })
      setFilter(rs)
    }

  return (
    <nav className='nav'>

      <img src="/logos/logo.png" alt="" className='navLogo' />

      <div className='serch'>

        <select id='location' className='buttonSerch' value={location} onChange={(e) => locationSearch(e.target.value)} >
            <option value="">Locations</option>
            <option value="Helsinki"> Helsinki</option>
            <option value="Turku">Turku</option>
            <option value="Vaasa">Vaasa</option>
            <option value="Oulu">Oulu</option>
          </select>
        <input id='guest' type='number' max={10} min={0} className='buttonSerch' placeholder="Add guests" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} />
        <button id='confirm' className='buttonSerch' onClick={filterData} > <img src="/logos/search.png" /></button>

      </div>
    </nav>
  )
}
export default Nav
