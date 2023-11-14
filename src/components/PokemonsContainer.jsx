import React, { useContext } from 'react'
import styled from 'styled-components'
import { PokeContext } from '../context/PokeContext'
import { PokeCard } from './PokeCard'

const PokeWrapper = styled.div`
    margin: 50px auto;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1em;

    h6{
        color: lime;
    }
`

export const PokemonsContainer = () => {

    const {pokemons, searchPokemons, loading} = useContext(PokeContext)

  return (
    <PokeWrapper>
        {loading && <h6>Loading...</h6>}
        {/* for each pokemon loaded on the screen, we map the card components with the data received from the api and stored in the poke context */}
        {
          searchPokemons.length < 1 ?
          pokemons.map(pokemon => <PokeCard data={pokemon.data} key={pokemon.data.id} />)
          : searchPokemons.map(pokemon => <PokeCard data={pokemon.data} key={pokemon.data.id} />)
        }
    </PokeWrapper>
  )
}
