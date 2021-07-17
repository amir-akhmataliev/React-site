import React, { Component} from 'react'
import { CarouselItem } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import me1 from '../assets/me1.jpg';
import me2 from '../assets/me2.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <CarouselItem>
                    <img
                        width={1280} 
                        height={880}
                        className="d-flex justify-content-center w-100 h-100"
                        src={ me1 }
                        alt="me1"
                    />
                    <Carousel.Caption>
                        <h3> Моя жизнь </h3>
                        <p> Я с другом на празднике дня улицы Лукачёва </p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img
                        width={1280} 
                        height={880}
                        className="d-flex justify-content-center w-100 h-100"
                        src={ me2 }
                        alt="me2"
                    />
                    <Carousel.Caption>
                        <h3> Моя жизнь </h3>
                        <p> Выезд актива студенческих отрядов  </p>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        )
    }
}