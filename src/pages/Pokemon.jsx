import React, { useContext } from 'react'
import styled from 'styled-components'
import { Overlay } from '../components/Overlay'
import { useNavigate } from 'react-router-dom'
import { PokeContext } from '../context/PokeContext'
import { AiOutlineClose } from 'react-icons/ai'


const OverlayPage = styled(Overlay)`
  display: flex;
  justify-content: center;
  align-items: center;
` 
const ProfileWrapper = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  width: 80%;
  height: 90%;
  padding: 0.2em;
  border: 1px solid ${props => props.theme.opositeColor};

  h1, h6, p{
    color: ${props => props.theme.opositeColor};
  }

  p{
    font-size: 0.9em;
  }

  .main{
    display: flex;
    justify-content: space-between;
    margin: 0.3em 0.6em;
  }

  .images{
    display: flex;
    flex-direction: column;
    gap: 0.4em;
    align-items: center;
    margin: 1em;
  }
  .principal{
    width: 8em;
  }
  .ximages img{
    width: 3.5em;
    margin-left: 2em;
    margin-right: 2em;
  }
  .ximages{
    justify-content: space-between;
  }

  .bottom{
    display: flex;
    padding: 1em;
    font-size: 0.8em;
    justify-content: space-between;
  }
  .infos{
    margin: 1em;
    line-height: 1.2em;
    padding-bottom: 0.2em;
  }
  .stats{
    margin: 1em;
    line-height: 1.2em;
  }

  @media (max-width: 280px){
    p{
      font-size: smaller;
    }

    .bottom{
      flex-direction: column;
    }

    .ximages{
      display: none;
    }
  }

  @media (max-width: 375px){
    .bottom{
      font-size: x-small;
    }
  }

  @media (max-width: 414px){
    .main h1{
      font-size: medium;
    }

    .bottom{
      flex-direction: column;
    }

    .bottom p{
      font-size: 1.2em;
      line-height: 1.5em;
    }

    .ximages img{
      width: 3em;
    }
  }

  @media (max-width: 430px){
    .main h1{
      font-size: medium;
    }
    .bottom{
      flex-direction: column;
    }
    .bottom p{
      font-size: 1.2em;
      line-height: 1.5em;
    }
  }


  @media (max-width: 768px){
    .principal{
      width: 15em;
    }
    .bottom{
      flex-direction: column;
    }
    .bottom p{
      font-size: 1.2em;
      line-height: 2em;
    }
  }

  @media (max-width: 820px){
    .principal{
      width: 9em;
    }
    .bottom{
      flex-direction: column;
    }
    .bottom p{
      font-size: 1em;
      line-height: 2em;
    }
  }


`

const TypesColors = styled.p`
  background-color: ${props => {
      switch (props.type) {
            case 'normal':
                return '#a8a878';
            case 'fighting':
                return '#df1814';
            case 'flying':
                return '#a890f0';
            case 'poison':
                return '#a040a0';
            case 'ground':
                return '#e0c068';
            case 'rock':
                return '#b8a038';
            case 'bug':
                return '#a8b820';
            case 'ghost':
                return '#705898';
            case 'steel':
                return '#b8b8d0';
            case 'fire':
                return '#f08030';
            case 'water':
                return '#6890f0';
            case 'grass':
                return '#78c850';
            case 'electric':
                return '#f8d030';
            case 'psychic':
                return '#f85888';
            case 'ice':
                return '#98d8d8';
            case 'dragon':
                return '#7038f8';
            case 'dark':
                return '#705848';
            case 'fairy':
                return '#ee99ac';
            default:
              return `${props => props.theme.backgroundColor}`;
        }
    }};
`

export const Pokemon = () => {

  const navigate = useNavigate()
  const {pokemonData} = useContext(PokeContext)
  //destructuring the data passed on the state so we can use it better later
  const {
    name, id, types, sprites,
    weight, height, abilities, stats
  } = pokemonData

  return (
    <OverlayPage>
      <ProfileWrapper>
        <div className='main'>
            <h1>{name}</h1>
            <AiOutlineClose style={{cursor: 'pointer', color: 'gray'}} onClick={() => navigate(-1)} />
        </div>
          <div className='images'>
            <img className='principal' src={sprites.front_default} alt="pokemon front" />
            <div className='ximages'>
              <p>other versions:</p>
              <img src={sprites.front_shiny} alt="pokemon front" />
              {/* <img src={sprites.other.dream_world.front_default} alt="pokemon front" /> */}
              <img src={sprites.other.home.front_default} alt="pokemon front" />
            </div>
          </div>
          <div className='bottom'>
            <div className='infos'>
              <p className='topo'>Pokemon number {id}, type: {types.map((type) => <TypesColors type={type.type.name} key={type.type.name}> {type.type.name} </TypesColors>)} </p>
              <p>Weight - {weight}</p>
              <p>Height - {height}</p>
              <div className='abilities'>
                <h6>Main Abilities:</h6>
                {abilities.map(ability =>
                    <p>{ability.ability.name}</p>
                  )}
              </div>
            </div>
            <div className='stats'>
              <h6>Stats:</h6>
              {stats.map(stat =>
                  <p>{stat.stat.name}: <span>{stat.base_stat}</span> </p>
                )}
            </div>
          </div>
      </ProfileWrapper>
    </OverlayPage>
  )
}
