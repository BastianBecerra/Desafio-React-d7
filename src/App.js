import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './componentes/Navigation';
import PokemonsProvider from './PokemonProvider';
// pages
import Home from './paginas/Home'
import Pokemones from './paginas/Pokemones'
import Pokemon from './paginas/Pokemon'

function App() {
  return (
    <div className="App">
      <PokemonsProvider>
        <BrowserRouter basename='react-poke-api-adl'>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/pokemones" element={<Pokemones />} />
            <Route path="/pokemon/:name" element={<Pokemon />} />
          </Routes>
        </BrowserRouter>
      </PokemonsProvider>

    </div>
  )
}

export default App
