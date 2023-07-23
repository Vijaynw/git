import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Atomic from "./Components/Atomic.jsx"
function App() {
 const [count, setCount] = useState(0)
 function clicked() {
  setCount((count) => count + 1)
 }
 function reset() {
  setCount((count) => count =0)
 }
  return (
    <>
      <div>
        <h1>Hello World ! Periodic Table of Elements </h1>
          {/* <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <div className="card">
        <button onClick={clicked}>
          count is {count}
        </button>
        <button onClick={reset}>
          Reset
        </button> */}
        <Atomic/>
      </div>
    </>
  )
}

export default App
