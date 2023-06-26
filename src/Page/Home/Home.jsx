import './Home.css';
import PageTitle from "../../PageTitle/PageTitle";
import Carousel from "./Component/Carousel/Carousel";
import ImageGallery from "./Component/ImageGallery/ImageGallery";
import KidImage from "./Component/KidImage/KidImage";
import ToyCarTab from "./Component/ToyCarTab/ToyCarTab";
import ScrollTopBtn from '../../ScrollTopBtn/ScrollTopBtn';

const Home = () => {
    return (
        <div className="home-bg-color">
            <PageTitle title={'Home'}></PageTitle>
            <Carousel></Carousel>
            <ImageGallery></ImageGallery>
            <ToyCarTab></ToyCarTab>
            <KidImage></KidImage>
            <ScrollTopBtn></ScrollTopBtn>
        </div>
    );
};

export default Home;