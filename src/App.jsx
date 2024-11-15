import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let [bulb, setState] = useState(false) 

  let onBulb =  ()=>{
    setState(true)
  }
  let offBulb = ()=>{
    setState(false)
  }
  let toggle = ()=>{
    setState(!bulb)
  }
 
  return (
    <>
    {
       bulb &&  <img width="300" src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/MSNBC/Components/Photo/_new/081209-light-bulb-03.jpg" alt="" />
    }
   {
    !bulb && <img width="300" src="https://thumbs.dreamstime.com/b/d-illustration-empty-light-bulb-isolated-white-background-realistic-d-rendering-electric-lamp-inside-d-103349315.jpg" alt="" />
   }

      <br /><button onClick={onBulb}>ON</button>
      <button onClick={offBulb }>Off</button><br /><br />
      <button onClick={toggle}>ON and Off</button>
    </>
  )
}

export default App
