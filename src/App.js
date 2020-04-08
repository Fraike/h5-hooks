import React, {useEffect,useState} from 'react'
import {add} from "./utils/math"
import './style.css'

function App() {
  const [count,setCount] = useState('1')
  const [array, ] =useState([1,2])
  useEffect(() => {
    console.log({count})
    console.log(add(1, 2))
    let itArray = array[Symbol.iterator]()
    console.log(itArray.next())
    console.log(itArray.next())
    console.log(itArray.next())
  })
  return (
    <div>
      <span>ss</span>
    </div>
  )

}

export default App
