// import React from 'react';
import './Carousel.css'
import slider_1 from '../../../../assets/slider-1.jpg'
import slider_2 from '../../../../assets/slider-2.jpg'
import slider_3 from '../../../../assets/slider-3.jpg'
import slider_4 from '../../../../assets/slider-4.jpg'

const Carousel = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="4000">
                    <img src={slider_1} className="d-block w-100 h-25 custom-responsive-img" alt="Slider-1" />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                    <img src={slider_2} className="d-block w-100 h-25 custom-responsive-img" alt="Slider-2" />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                    <img src={slider_3} className="d-block w-100 h-25 custom-responsive-img" alt="Slider-3" />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                    <img src={slider_4} className="d-block w-100 h-25 custom-responsive-img" alt="Slider-4" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;