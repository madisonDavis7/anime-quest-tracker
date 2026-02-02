import React from 'react';
import './Home.css';
import Slider from 'react-slick';
import testImage from '../../images/test.jpg';
import testImage2 from '../../images/test2.jpg';


//home page components
const ImageCarousel = () => {
    const images = [
      testImage,
      testImage2,
      testImage
    ];

    //slider settings 
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div className="img-cont">
                    <img src={images[0]} alt="Slide 1" className="image"/>
                </div>
                <div className="img-cont">
                    <img src={images[1]} alt="Slide 2" className="image"/>
                </div>
                <div className="img-cont">
                    <img src={images[2]} alt="Slide 3" className="image"/>
                </div>
            </Slider>
        </div>
    );
};

const HomeInfoRow = () => {
    const images = [
        testImage,
        testImage2
    ]
    return (
        <div className="row-container">
            <div className="row-item">
                <img src={images[0]} alt="Info 1" className="row-image"/>
            </div>
            <div className="row-item">
                <p className="row-text">Track Your Progress. </p>
                <p className="row-text">Discover New Anime. </p>
                <p className="row-text">All In One Place.</p>

            </div>
            <div className="row-item">
                <img src={images[1]} alt="Info 2" className="row-image"/>
            </div>
        </div>
    );
};

export default function Home() {
    return (
        <div className="home">
            <h1>Welcome to Anime Quest Tracker</h1>
            <ImageCarousel />
            <HomeInfoRow />
        </div>
    );
}