import './App.css';
import { ThemeProvider } from 'styled-components';
import LightTheme from './themes/light'
import DarkTheme from './themes/dark'
import GlobalStyle from './themes/global'
import { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Pokemon } from './pages/Pokemon';
import { Favorites } from './pages/Favorites';
import { Footer } from './components/Footer';
import { PokeContext } from './context/PokeContext';
import axios from 'axios';

function App() {

  const [theme, setTheme] = useState(LightTheme)

  const {pokemons, setPokemons, setGlobalPokemons, setLoading} = useContext(PokeContext)

  const catchPokemons = () => {
    setLoading(true)
    const endpoint = []
    const totalPokemons = 151
    
    for(let i = 1; i <= totalPokemons; i++){
      // put the number of the pokemon inside the array, one by one
      endpoint.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }
    //map the array with pokemons, giving us the response data,
    //putting it in the pokemons state, wich will be called in the pokemon container components
    axios.all(endpoint.map(end => axios.get(end))).then(response => {
      setPokemons(response)
      setLoading(false)
    }).catch(console.log('error'))
  }

  setGlobalPokemons(pokemons)

  useEffect(() => {
    catchPokemons()
  },[])

  return (
    <ThemeProvider theme={{...theme, setTheme: () => {
      setTheme(s => s.id === 'light' ? DarkTheme : LightTheme)
    }
    }}>
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:id' element={<Pokemon/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
