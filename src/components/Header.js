import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderContainer>
            <div className='text-center  p-4'>5TH<img src= '../../heart.png' style={{width:'48px'}}  alt = 'LOVE'/><br></br>ANNIVERSARY</div>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    height:10rem;
    background-image: linear-gradient(to left, #74ebd5      , #9face6);
    font-family: 'Finger Paint', cursive;
    font-size:40px;
    font-weight:700;

    img{
        margin-left:20px;
        
    }
`
