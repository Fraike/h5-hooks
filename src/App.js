import React, {useEffect, useState} from 'react'
import * as axios from 'axios'
import './style.css'

function App() {
  const [count,] = useState('1')
  useEffect(() => {
    console.log({count})
    axios.get('/api/header.json').then(res => {
      console.log(res)
    })
  })
  return (
    <div>
      <span>ssss</span>
    </div>
  )

}

export default App
