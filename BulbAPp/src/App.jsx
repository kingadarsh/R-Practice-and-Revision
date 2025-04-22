import { useState } from 'react'
import './App.css'

function App() {
const [bulbOn,setBulbOn]=useState(false);
  return (
    <>
      <Light bulbOn={bulbOn} setBulbOn={setBulbOn}/>
    </>
  )
}

const Light=({bulbOn,setBulbOn})=>{
  return<div>
    <LightBulb bulbOn={bulbOn}/>
    <LightSwitch bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

const LightBulb=({bulbOn})=>{
  return <div>
  {bulbOn ? <h1 style={{color:"green"}}>Bulb is On </h1>:<h1 style={{color:"red"}}>Bulb is Off </h1>}
  </div>
}

const LightSwitch=({bulbOn,setBulbOn})=>{
  return(
    <div>
      <button onClick={()=>setBulbOn(c=>!c)}>
        {bulbOn ? "Off" :"On"}
        </button>
    </div>
  )
}

export default App
