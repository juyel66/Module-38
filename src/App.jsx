import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Vite + React</h1>
      <Todo task="Learn react" isDone={true}></Todo>
      <Todo task="core concept" isDone={true}></Todo>
      <Todo task="try JSX" isDone={true}></Todo>
      <Todo></Todo>


    </>
  )
}



export default App
