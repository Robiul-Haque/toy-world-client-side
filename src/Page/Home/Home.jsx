// import React from 'react';
import Carousel from "./Component/Carousel/Carousel";
import ImageGallery from "./Component/ImageGallery/ImageGallery";
import ToyCarTab from "./Component/ToyCarTab/ToyCarTab";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <ImageGallery></ImageGallery>
            <ToyCarTab></ToyCarTab>
        </div>
    );
};

export default Home;