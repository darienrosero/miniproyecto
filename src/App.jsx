import { useEffect, useState } from 'react'
import Card from './components/cards'
import Nav from './components/nav'
import UlLocation from './components/ulLocations'


function App() {
  const [data, setData] = useState([])
  async function getData() {
    const rs = await fetch('./stays.json')
    const rsJson = await rs.json()
    setData(rsJson)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Nav />
      <div id='mainConteiner'>
        <UlLocation />
        <div id='publications'>
          {data.map((info, index) => (
            <Card key={index} info={info} img={info.photo} superHost={info.superHost} cualyties={info.type} beds={info.beds} calification={info.rating} place={info.title} />
          ) )
          }
        </div>
      </div>
    </>
  )
}

export default App
