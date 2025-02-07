import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './style.css'
import { Link } from '@tanstack/react-router'

function Compteur() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <button>
        <Link to='/'>Retour à l'accueil</Link>
      </button>
    </>
  )
}

export default Compteur
