import React, {useEffect} from 'react'
import {add} from "./utils/math"

function App(){
    useEffect(()=>{
      console.log(add(1,2))
    })
    return (
        <div>

            <span>ss</span>
        </div>
    )

}

export default App
