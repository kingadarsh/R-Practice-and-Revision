import { createContext, useContext, useState } from 'react'
import './App.css'

const BulbContext=createContext();

function BulbWrapper({children}){
  const [bulbOn,setBulbOn]=useState(false);
   return (
    
    <BulbContext.Provider value={{bulbOn:bulbOn,setBulbOn:setBulbOn}} >
    {children}
    </BulbContext.Provider>
   )
}

function App() {
  return (
    <>
    <BulbWrapper>
    <Light/>
    </BulbWrapper>
    
    </>
  )
}

const Light=()=>{
  return (
    <div>
      <LightBulb/>
      <LightSwitch/>
    </div>
  )
}

const LightBulb=()=>{
  const {bulbOn}=useContext(BulbContext);
  return(<div>
    {bulbOn?"Bulb is On":"Bulb is Off"}
    </div>
  )
}

const LightSwitch=()=>{
  const {bulbOn,setBulbOn}=useContext(BulbContext);

  return(
    <div>
      <button onClick={()=>{setBulbOn(c=>!c)}} >{bulbOn?"Off":"On"}</button>
    </div>
  )
}



export default App
