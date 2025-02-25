import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter = 15
  const addvalue =(()=>{
  
    console.log('clicked',counter);
    
    if(counter<20){
      counter = counter +1 
    setCounter(counter)
    }
  })
 let removevalue =(()=>{
  if(counter>0){
    counter = counter -1 
  setCounter(counter)
  }
 })
  return (
    
    <>
  <h1>Chai Aur React</h1>
  <h2>Counter value:{counter}</h2>

  <button onClick={addvalue}>Add value:{counter}</button>
  <br />
  <button onClick={removevalue}>Remove value:{counter}</button>
  <p>footer:{counter}</p>
   </>
  )
}

export default App
