import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { PokeContext } from '../context/PokeContext'

const SearchWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 5px;
  flex-wrap: wrap;

  input{
    max-width: 500px;
    width: 60vw;

    &::placeholder{
      font-size: 0.8em;
      font-family: 'Press Start 2P', cursive;
    }
  }

  @media (max-width: 360px){
    input {
      &::placeholder{
        font-size: 0.7em;
      }
    }
  }

  @media (max-width: 280px){
    input {
      &::placeholder{
        font-size: 0.5em;
      }
    }
  }

`

export const Search = () => {

  const { pokemons, setSearchPokemons } = useContext(PokeContext)

  const [name, setName] = useState('')
  const [found, setFound] = useState(false)

  const handleInput = (name) => {
    setName(name)
    if (name === '') return setSearchPokemons(pokemons)
    const filtered = pokemons.filter(pokemon => pokemon.data.name.includes(name))
    if(filtered.length > 1){
      setFound(true)
      setTimeout(() => {
        setFound(false)
        setName('')
      }, 5000)
    }
    setSearchPokemons([...filtered])
  }

  return (
    <SearchWrapper>
        <input 
            type="search" 
            name="search"
            placeholder='Search for a Pokemon'
            value={name}
            onChange={(e) => handleInput(e.target.value)}
        />
    </SearchWrapper>
  )
}
