// import React from 'react';
import PageTitle from "../../PageTitle/PageTitle";
import Carousel from "./Component/Carousel/Carousel";
import ImageGallery from "./Component/ImageGallery/ImageGallery";
import ToyCarTab from "./Component/ToyCarTab/ToyCarTab";

const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'}></PageTitle>
            <Carousel></Carousel>
            <ImageGallery></ImageGallery>
            <ToyCarTab></ToyCarTab>
        </div>
    );
};

export default Home;