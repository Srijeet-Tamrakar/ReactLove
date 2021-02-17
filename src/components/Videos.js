import React from 'react'
import VideoPlayer from 'react-video-js-player'
import {Carousel} from 'react-bootstrap'
import fulbutte from './Videos/fulbutte.mp4'
import corvette from './Videos/Corvette.mp4'
import saari from './Videos/saari.mp4'
import canibal from './Videos/canibal.mp4'
import v1 from './Videos/1.mp4'
import v2 from './Videos/2.mp4'
import v3 from './Videos/3.mp4'
import styled from 'styled-components'

const Videos = () => {
    const video1 = fulbutte
    const video2 = corvette
    const video3 = saari
    const video4 = canibal
    const nvideo1 = v1
    const nvideo2 = v2
    const nvideo3 = v3
    return (
        <Video>
            <h1 className =' text-center p-3 '>TIKTOK QUEEN</h1>
            <Carousel controls={false} interval={null} className='mb-5'>
            <Carousel.Item><VideoPlayer src={video1} width='410' height='550' /></Carousel.Item>
            <Carousel.Item><VideoPlayer src={video2} width='410' height='550'/></Carousel.Item>
            <Carousel.Item><VideoPlayer src={video3} width='410' height='550' /></Carousel.Item>
            <Carousel.Item><VideoPlayer src={video4} width='410' height='550'/></Carousel.Item>
            </Carousel> 

            <h1 className =' text-center p-3 five'>MEMORIES</h1>
            <Carousel controls={false} interval={null}>
            <Carousel.Item><VideoPlayer src={nvideo1} width='410' height='550' /><Carousel.Caption><p>I found a woman, stronger than anyone I know. She shares my dreams, I hope that someday I'll share her home</p></Carousel.Caption></Carousel.Item>
            <Carousel.Item><VideoPlayer src={nvideo2} width='410' height='550'/><Carousel.Caption><p>Until I make you mine!</p></Carousel.Caption> </Carousel.Item> 
            <Carousel.Item><VideoPlayer src={nvideo3} width='410' height='550' /><Carousel.Caption><p>Cause we were just kids when we fell in love. Not knowing what it was. I will not give you up this time</p></Carousel.Caption></Carousel.Item>
            </Carousel> 

            <footer className="f text-center mt-5">
                <div class="container p-4">
                    <div class="row">
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Footer text</h5>

                        <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                        molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                        aliquam voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </div>
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Footer text</h5>

                        <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                        molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                        aliquam voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </div>
                    </div>
                </div>
                <div className="cl text-center text-black p-5">
                    Copyright &copy; Feb 28, 2016 :<br/>Smriti Bajracharya | <br/> Licensed to : Srijeet Tamrakar
                </div>
            </footer>
        </Video>
    )
}

export default Videos

const Video = styled.div`
    h1, h3{
        font-family: 'Finger Paint', cursive;
        font-size:40px;
        font-weight:700;
        margin-top:10rem;
    }

    .five{
        margin-top:5rem;
    }

    p{
        font-family: 'Finger Paint', cursive;
        font-size:20px;
        font-weight:500;
    }

    .cl{
        font-family: 'Charmonman', cursive;
        font-size:20px;
        font-weight:500;
    }

    .f{
        background-color:#95DBE5FF;
    }
`