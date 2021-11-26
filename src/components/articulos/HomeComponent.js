import React from 'react';

import { Carousel, CarouselItem } from 'react-bootstrap';

export default function HomeComponent(props) {

    const {articulo} = props;
    
    return (
        <>
              <div class="carousel">
                        <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 h-50"
                            src="/assets/images/swappie-product-iphone-7-rose-gold.webp"
                            alt="First slide" 
                            />
                            <Carousel.Caption>
                            <h3></h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                       </Carousel>
              </div>
        </>
    )
}