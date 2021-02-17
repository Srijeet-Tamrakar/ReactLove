import React from 'react'
import styled from 'styled-components'

const Images2 = () => {
    return (
        <Images22 className=' container '>
            <div className='text-center p-3  ich'> Ich Liebe Dich</div>
            <img src="../../Love.jpg" className="img-fluid rounded" alt="Responsive image"></img>
        </Images22>
    )
}

export default Images2

const Images22 = styled.div`
    *{
        font-family: 'Finger Paint', cursive;
        font-size:40px;
        font-weight:700;
        
    }

    .ich{
        margin-top:5rem;
    }

    
`
