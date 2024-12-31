import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import Header from '../components/header'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Header />
      </div>
      {/* Tailwind css */}
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
      {/* End Tailwind css */}
      <h1>
        Welcome to the Pokédex!
      </h1>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => {
            console.log('START');
            navigate('/pokedex');
          }}>
          START
        </button>
      </div>
    </>
  )
}

export default App
