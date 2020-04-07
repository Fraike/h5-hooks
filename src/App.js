import React, {useEffect,useState} from 'react'
import {add} from "./utils/math"
import './style.css'

function App() {
  const [count,setCount] = useState('1')
  useEffect(() => {
    console.log({count})
    console.log(add(1, 2))
  })
  return (
    <div>
      <span>ss</span>
    </div>
  )

}

export default App
