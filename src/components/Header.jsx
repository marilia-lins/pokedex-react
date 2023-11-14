import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled, { ThemeContext } from "styled-components";
import { Toggle } from './Toggle';
import ball from '../assets/closeball.png'

const HeaderWrapper = styled.header`
    background-color: #c90b0b;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        color: ${p => p.theme.fontColor};
        margin-left: 2em;
        font-size: 1.1em;
    }

    img{
        width: 3em;
    }

    .top{
        display: flex;
        align-items: center;
        gap: 20px;
    }

    @media (max-width: 820px){
        .top{
            font-size: 0.9em;
        }
    }

    @media (max-width: 529px) {
        h1{
            font-size: 0.8em;
        }
    }


    @media (max-width: 500px) {
        h1{
            margin-left: 0em;
            font-size: 0.7em;
        }
        .top{
            gap: 8px;
            font-size: 0.8em;
        }
    }

    @media (max-width: 450px) {
        h1{
            margin-left: 0em;
            font-size: 0.4;
        }
    }

    @media (max-width: 360px) {
        h1{
            margin-left: 0em;
            font-size: 0.7em;
        }
        .top{
            gap: 5px;
            font-size: 0.7em;
        }
    }

`

export const Header = () => {

    const {id, setTheme} = useContext(ThemeContext)

  return (
    <HeaderWrapper>
        <Link to='/'>
            <h1>Pokedex - Generation I</h1>
        </Link>
        <div className='top'>
        <Link to='/favorites'>
            <img src={ball} alt="pokeball" />
        </Link>
        <Toggle isActive={id === 'dark'} onToggle={setTheme}/>
        </div>
    </HeaderWrapper>
  )
}
