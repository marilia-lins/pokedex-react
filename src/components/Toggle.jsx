import styled from 'styled-components'
import React from 'react'

const ToggleWrapper = styled.div`
    width: 50px;
    min-width: 50px;
    height: 25px;
    border-radius: 25px;
    border: 1px solid #666;
    margin: auto;
    display: flex;
    background: ${p => p.theme.backgroundColor};
`

const Notch = styled.div`
    height: 21px;
    width: 21px;
    border: 1px solid #666;
    margin-top: 1px;
    background: #c90b0b;
    border-radius: 50%;
    transition: transform 0.1s linear;
    cursor: pointer;
    transform: translate(${p => p.isActive ? '26px' : '1px'});
`

export const Toggle = ({isActive, onToggle}) => {
  return (
    <ToggleWrapper onClick={onToggle}>
        <Notch isActive={isActive}/>
    </ToggleWrapper>
  )
}
