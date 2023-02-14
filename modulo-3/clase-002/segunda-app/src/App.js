import React from 'react'
import Card from './components/card/Card'
import NavBar from './components/navBar/Navbar'

const App = () => {
  const infoCard = [
    {
      name: 'Ale',
      img: 'https://rickandmortyapi.com/api/character/avatar/268.jpeg',
      type: 'Humano'
    },
    {
      name: 'Alvarito',
      img: 'https://rickandmortyapi.com/api/character/avatar/268.jpeg',
      type: 'Humano'
    },
    {
      name: 'Rodo',
      img: 'https://rickandmortyapi.com/api/character/avatar/268.jpeg',
      type: 'Humano'
    }
  ]
  return (
    <>
      <NavBar />
      {
        infoCard.map((data) => <Card info={data} />)
      }
    </>
  )
}

export default App
