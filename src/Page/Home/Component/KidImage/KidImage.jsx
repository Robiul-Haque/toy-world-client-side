import './KidImage.css';
import kid_1 from '../../../../assets/kid-image-1.jpg';
import kid_2 from '../../../../assets/kid-image-2.webp';
import kid_3 from '../../../../assets/kid-image-3.jpg';

const KidImage = () => {
    return (
        <div className='container my-5 py-5 text-center text-md-start d-md-flex justify-content-md-between align-items-md-center flex-md-row flex-lg-row flex-column' data-aos="fade-right">
            <div>
                <h1 className='fw-bolder lh-sm kid-text'>BEST TOY CAR</h1>
                <h1 className='fw-bolder lh-sm kid-text'>IN TOY WORLD</h1>
                <div className='mt-4'>
                    <p className='fw-bold fs-5 mb-0 kid-text'>ALL PREMIUM AND POPULAR TOY</p>
                    <p className='fw-bold fs-5 kid-text'>GET 20% OFF YOUR FIRST ORDER</p>
                </div>
            </div>
            <div>
                <img src={kid_1} alt="toy image 1" className='image-fluid pe-md-2 rounded kid-img' />
                <img src={kid_2} alt="toy image 2" className='image-fluid px-md-1 rounded kid-img' />
                <img src={kid_3} alt="toy image 3" className='image-fluid ps-md-2 rounded kid-img' />
            </div>
        </div>
    );
};

export default KidImage;