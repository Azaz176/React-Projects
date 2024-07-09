import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'

function App() {
  return (
    <>
      <h1 className='bg-green-400 p-5 rounded-xl mb-5'>Hi There</h1>
     <Cards username="chairAurCode"/>
     <Cards username="AZAZ" btnText="click me"/>
     <Cards username="AZAZ" btnText="click me"/>
     <Cards username="AZAZ" btnText="click me"/>
     
    </>
  )
}

export default App
