/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <h1 className='movie'>The Avengers Movie !!! </h1>
    <div>
        <Home></Home>
    </div>
    </>
  )
}

export default App
