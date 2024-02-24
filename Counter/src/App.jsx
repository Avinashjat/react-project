import { useState } from 'react'
import './App.css'

function App() {
 

let [counter , setCounter] = useState(0)
 

let addvalue = ()=>{
  setCounter(counter+1)
  setCounter(counter+1)
  setCounter(counter+1)
  setCounter(counter+1)
}


let removevalue = ()=>{
 

  if(counter==0){
    setCounter(0)
  }else{
    setCounter(counter-1)
  }
}

  return (
    <>
      
<h1> counter value {counter}</h1>

<button onClick={addvalue}> Add value   </button>

<br /> 
<br />
<button onClick={removevalue}> Remove  value  </button>

    </>
  )
}

export default App
