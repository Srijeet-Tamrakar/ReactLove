import React from 'react'
import {Carousel} from 'react-bootstrap'

const Images = () => {
    return (
        <div>
            <Carousel >
            <Carousel.Item interval = {4000}>
                <img className="d-block w-100" src="../../Images/8.jpg" alt="First slide"/>
                <Carousel.Caption><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 " src="../../Images/11.jpg" alt="First slide"/>
                <Carousel.Caption><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img className="d-block w-100 " src="../../Images/2.jpg" alt="First slide"/>
                <Carousel.Caption><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img className="d-block w-100 " src="../../Images/1.jpg" alt="First slide"/>
                <Carousel.Caption><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Images
