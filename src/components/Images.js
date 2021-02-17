import React from 'react'
import {Carousel} from 'react-bootstrap'
import eight from './Images/8.jpg'
import eleven from './Images/11.jpg'
import two from './Images/2.jpg'
import one from './Images/1.jpg'


const Images = () => {
    return (
        <div>
            <Carousel >
            <Carousel.Item interval = {4000}>
                <img className="d-block w-100" src={eight} alt="First slide"/>
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 " src={eleven} alt="First slide"/>
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img className="d-block w-100 " src={two} alt="First slide"/>
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img className="d-block w-100 " src={one} alt="First slide"/>
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Images
