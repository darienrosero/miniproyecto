import { useEffect, useState } from 'react'
import Card from './components/cards'
import Nav from './components/nav'
import UlLocation from './components/ulLocations'


function App() {
  const [data, setData] = useState([])
  const [filterCard, setFilter] = useState([])

  async function getData() {
    const rs = await fetch('./stays.json')
    const rsJson = await rs.json()
    setData(rsJson)
    setFilter(rsJson)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Nav data={data} setFilter={setFilter} />
      <div id='mainConteiner'>
        <UlLocation />
        <div id='publications'>
          {filterCard.map((info, index) => (
            <Card key={index} info={info}/>
          ))
          }
        </div>
      </div>
    </>
  )
}

export default App
