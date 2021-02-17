import React from 'react'
import styled from 'styled-components'
import heart from './Images/heart.png'

const Header = () => {
    return (
        <HeaderContainer>
            <div className='text-center  p-4'>5TH<img src= {heart} style={{width:'4rem'}}  alt = 'LOVE'/><br></br>ANNIVERSARY</div>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    height:10rem;
    background-image: linear-gradient(to left, #74ebd5      , #9face6);
    font-family: 'Finger Paint', cursive;
    font-size:2.5em;
    font-weight:700;

    img{
        margin-left:2rem;
        
    }
`
