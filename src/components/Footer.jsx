import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {AiFillGithub} from 'react-icons/ai'

const FooterWrapper = styled.footer`
    background-color: #c90b0b;
    padding: 12px;
    text-align: center;
    margin-top: 2.3em;
    /* position: absolute; */
    bottom: 0;
    width: 100%;
    font-size: 0.9em;

    @media (max-width: 500px){
        h6{
            font-size: 0.7em;
        }
    }

    @media (max-width: 360px){
        h6{
            font-size: 0.6em;
        }
    }

    @media (max-width: 280px){
        h6{
            font-size: 0.5em;
        }
    }
`

const StyledLink = styled(Link)`
  color: ${p => p.theme.fontColor};
  text-decoration: none;
`

export const Footer = () => {
  return (
    <FooterWrapper>
        <h6>
        Developed By <StyledLink to='https://github.com/marilia-lins'>Marília Lins <AiFillGithub size={15}/></StyledLink>
        </h6>
    </FooterWrapper>
  )
}
