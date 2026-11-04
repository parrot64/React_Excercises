
import { createRoot } from 'react-dom/client'
import { useState } from 'react';


function Test() {
  var [counter,setI] = useState(0)
  function clicked() {
    setI(counter + 1);
  }

  return (
    <>
      <p>Hello World{counter}</p>
      <button onClick={clicked}>Press</button>
    </>
  )
}

createRoot(document.getElementById('root')).render (
  <div>
    <Test/>
  </div>
);