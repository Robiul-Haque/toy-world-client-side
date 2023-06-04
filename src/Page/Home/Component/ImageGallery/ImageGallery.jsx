// import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import img_1 from '../../../../assets/img-1.jpg'
import img_2 from '../../../../assets/img-2.jpg'
import img_3 from '../../../../assets/img-3.jpg'
import img_4 from '../../../../assets/img-4.jpg'
import img_5 from '../../../../assets/img-5.jpg'
import img_6 from '../../../../assets/img-6.jpg'
import img_7 from '../../../../assets/img-7.jpeg'
import img_8 from '../../../../assets/img-8.jpg'
import img_9 from '../../../../assets/img-9.jpg'
import img_10 from '../../../../assets/img-10.jpg'
import img_11 from '../../../../assets/img-11.jpg'
import img_12 from '../../../../assets/img-12.webp'
import './ImageGallery.css'


const ImageGallery = () => {
    return (
        <div className='container text-center bg-light rounded my-5 py-5'>
            <h2 className='text-secondary mb-5'>Car Image Gallery</h2>
            <LightGallery
                speed={900}
                plugins={[lgThumbnail, lgZoom, lgAutoplay]}
            >
                <a href={img_1}>
                    <img alt="img1" src={img_1} className='rounded m-2 border border-5 shadow img-size' />
                </a>
                <a href={img_2}>
                    <img alt="img2" src={img_2} className='rounded m-2 border border-5 shadow img-size' />
                </a>
                <a href={img_3}>
                    <img alt="img2" src={img_3} className='rounded m-2 border border-5 shadow img-size' />
                </a>
                <a href={img_4}>
                    <img alt="img2" src={img_4} className='rounded m-2 border border-5 shadow img-size' />
                </a>
                <a href={img_5}>
                    <img alt="img2" src={img_5} className='rounded m-2 border border-5 shadow img-size' />
                </a>
                <a href={img_6}>
                    <img alt="img2" src={img_6} className='rounded m-2 border border-5 shadow img-size' />
                </a>
                <a href={img_7}>
                    <img alt="img2" src={img_7} className='rounded m-2 border border-5 shadow img-size' />
                </a>
                <a href={img_8}>
                    <img alt="img2" src={img_8} className='rounded m-2 border border-5 shadow img-size' />
                </a>
                <a href={img_9}>
                    <img alt="img2" src={img_9} className='rounded m-2 border border-5 shadow img-size' />
                </a>
                <a href={img_10}>
                    <img alt="img2" src={img_10} className='rounded m-2 border border-5 shadow img-size' width='20%' />
                </a>
                <a href={img_11}>
                    <img alt="img2" src={img_11} className='rounded m-2 border border-5 shadow img-size' width='20%' />
                </a>
                <a href={img_12}>
                    <img alt="img2" src={img_12} className='rounded m-2 border border-5 shadow img-size' width='20%' />
                </a>
            </LightGallery>
        </div>
    );
};

export default ImageGallery;