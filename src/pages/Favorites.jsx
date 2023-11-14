import React, { useContext } from 'react'
import styled from 'styled-components'
import { PokeContext } from '../context/PokeContext'
import { PokeCard } from '../components/PokeCard'

const FaveWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
      margin: 2em;
      color: ${p => p.theme.opositeColor};
    }

    p{
      color: ${p => p.theme.opositeColor};
    }

    .pokies{
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: space-around;
      margin: 1em;
    }
`

export const Favorites = () => {

  const {favorite} = useContext(PokeContext)

  return (
    <FaveWrapper>
      <h3>Pokemons you catched:</h3>
      <div className='pokies'>
        {favorite.length < 1 && <p>You didn't catch any pokemon yet!</p>}
        {favorite.map(fav => <PokeCard data={fav} key={fav.id}/>)}
      </div>
    </FaveWrapper>
  )
}
