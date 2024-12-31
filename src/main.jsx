import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import App from './routes/App.jsx'
import Pokedex from './routes/Pokedex.jsx'
import Pokegrid from './routes/Pokegrid.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokegrid" element={<Pokegrid />}/>
        <Route path="/pokedex/:pokemonId" element={<Pokedex />}/>  {/* the ‘:’ tells that the route is going to be dinamic */}
      </Routes>
    </Router>
  </StrictMode>,
)
