import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom'
import './styles/index.css'
import App from './routes/App.jsx'
import Pokegrid from './routes/Pokegrid.jsx'
import Pokedex, { loader as pokedexLoader } from './routes/Pokedex'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "pokegrid",
    element: <Pokegrid />,
  },
  {
    path: "pokedex/:pokemonId",  // the ‘:’ tells that the route is going to be dinamic
    element: <Pokedex />,
    loader: pokedexLoader,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
