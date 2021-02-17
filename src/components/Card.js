import React from 'react'
import styled from 'styled-components'
import her1 from './Images/her1.jpg'
import me1 from './Images/me1.jpg'
import fb from './Images/facebook-love.svg'

const Card = () => {
    return (
        <Card2 className='mt-5 container'> 
            <div className='d-flex'><img className="her" src={her1} alt="Card image cap"/><p className='float-right'> "He stole my heart, so I am planning to steal his last name."</p></div>
            <img src= {fb} style={{width:'48px'}} className='mx-auto d-block'  alt = 'LOVE'/>
            <div className='d-flex'> <p className='float-left mt-2'> "I want to be the reason you look down at your phone and smile. Then walk into a pole."</p>  <img className="me" src={me1} alt="Card image cap"/></div>
        </Card2>
    )
}

export default Card

const Card2 = styled.div`
    img{
        width:150px;
        height:150px;
        border-radius:50%;
    }

    .me{
        float:right;
        margin-left:2rem;
    }

    .her{
        margin-right:2rem;
    }

    *{
        font-family: 'Finger Paint', cursive;
        font-size:15px;
        font-weight:300;
        
    }

    container{
        margin-bottom:10rem;
    }
`