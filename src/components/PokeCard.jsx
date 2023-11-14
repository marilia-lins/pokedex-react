import React, { useContext } from 'react'
import styled from 'styled-components'
import { PokeContext } from '../context/PokeContext'
import { Link } from 'react-router-dom'
import pokeball from '../assets/closeball.png'
import { backgroundCardColors } from './utils/backgroundColors'
import openpokeball from '../assets/openball.png'
import { useFavoriteContext } from '../context/useContext/useFavoriteContext'

const CardWrapper = styled.div`
    width: 8em;
    padding: 1em;
    position: relative;
    border-radius: 10px;
    border: 2px solid ${p => p.theme.opositeColor};
    background-color: ${props => props.defaultColor};
    transition: transform .2s;
    text-shadow: 0 0 2px ${p => p.theme.opositeColor};

    &:hover{
        transform: translate(0, -0.4rem);
    }

    .infos{
        display: flex;
        flex-direction: column;
        gap: 0.6em;
    }

    .pokeball{
        width: 1.5em;
        position: absolute;
        right: 0.5em;
        top: 0.5em;
        cursor: pointer;
    }

    .toprow{
        font-size: 0.6em;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        justify-content: space-between;
        color: ${p => p.theme.fontColor};
    }

    .type{
        display: flex;
        font-size: 0.4em;
        justify-content: center;
        padding: 2px 5px;
        background-color: rgba(250, 250, 250, 0.5);
    }

`

export const PokeCard = ({data}) => {
    //destructuring the data so we can use it in a easy way latter
    const {name, sprites, types, id} = data
    //we store the data in the pokemonData state in the context so we can use this info in the unique profile of each pokemon clicked
    const {setPokemonData, loading, favorite} = useContext(PokeContext)
    
    const {newFavorite} = useFavoriteContext()
    const favoritedPokemon = () => {
        const faved = favorite.some((fav) => fav.id === id)
        const pic = !faved ? openpokeball : pokeball
        return pic
    }
    const pokeballPic = favoritedPokemon()

    const bgColor = (types) => {
        //the deafult type that will give us the main bg color
        const defaultType = types[0].type.name
        //imports the obj array with the colors of each type
        const colorTypes = backgroundCardColors()
        //filters the colors, if is the same as the type in the array, is set as the deafult color of the card
        //and passed as props to the styled component
        const colorTypesFiltered = colorTypes.filter(colorType => colorType.type === defaultType)
        const defaultColor = colorTypesFiltered[0].color
        return defaultColor
    }

    return (
    <CardWrapper defaultColor={bgColor(types)}>
        <img className='pokeball' src={pokeballPic} alt="pokeball" onClick={() => newFavorite(data)}/>
        <Link defaultColor={bgColor(types)} to={`/${id}`} onClick={() => setPokemonData(data)}>
            <img src={sprites.front_default} alt={name} />
            <div className='infos'>
                <div className='toprow'>
                    <span>#{id}</span>
                    <span>{name}</span>
                </div>
                <p className='type'>
                    {types.map(type => <p>{type.type.name}</p>)}
                </p>
            </div>
        </Link>
    </CardWrapper>
  )
}
