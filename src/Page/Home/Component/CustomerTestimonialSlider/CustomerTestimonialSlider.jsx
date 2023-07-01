/* eslint-disable react/no-unescaped-entities */
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import './CustomerTestimonialSlider.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CustomerTestimonialSlider = () => {
    return (
        <div className='container px-md-5 my-5 py-5'>
            <h2 className='text-center text-white mb-5 fw-bold'>Customer Review</h2>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='text-center p-5 bg-card-color'>
                        <img src={'https://i.ibb.co/GHcs0HY/download.jpg'} alt="" className='slider-img' />
                        <div className='mt-4'>
                            <h4 className='text-white'>Sarah</h4>
                            <div className='d-flex justify-content-center gap-2 flex-row my-3'>
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star-half-empty.png" alt="star-half-empty" />
                                <img width="18" height="18" src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/star--v1.png" alt="star--v1" />
                            </div>
                            <p className='text-white w-75 mx-auto'>I bought the red sports car for my son, and he absolutely loves it! The attention to detail and the smooth performance make it a perfect toy car. Highly recommended!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center p-5 bg-card-color'>
                        <img src={'https://i.ibb.co/R7brtcb/download-1.jpg'} alt="" className='slider-img' />
                        <div className='mt-3'>
                            <h4 className='text-white'>John</h4>
                            <div className='d-flex justify-content-center gap-2 my-3'>
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/star--v1.png" alt="star--v1" />
                            </div>
                            <p className='text-white w-75 mx-auto'>I purchased the remote-controlled monster truck for my nephew, and he could not be happier. The rugged design and powerful motor allow it to conquer any terrain. Great quality!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center p-5 bg-card-color'>
                        <img src={'https://i.ibb.co/C1VzM1p/lisa-eadicicco-profile-photo.webp'} alt="" className='slider-img' />
                        <div className='mt-3'>
                            <h4 className='text-white'>Sarah</h4>
                            <div className='d-flex justify-content-center gap-2 my-3'>
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star-half-empty.png" alt="star-half-empty" />
                            </div>
                            <p className='text-white w-75 mx-auto'>I bought the police car set for my daughter, and she enjoys playing with it for hours. The flashing lights and realistic sound effects add an extra level of excitement. It's a fantastic toy car set!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center p-5 bg-card-color'>
                        <img src={'https://i.ibb.co/99hpxgM/images-1.jpg'} alt="" className='slider-img' />
                        <div className='mt-3'>
                            <h4 className='text-white'>David</h4>
                            <div className='d-flex justify-content-center gap-2 my-3'>
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                            </div>
                            <p className='text-white w-75 mx-auto'>I recently bought the race track set for my grandson, and he's thrilled with it. The set is easy to assemble, and the cars zoom around the track smoothly. It provides endless fun!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center p-5 bg-card-color'>
                        <img src={'https://i.ibb.co/SxRLVz6/Emily-You-Tube.webp'} alt="" className='slider-img' />
                        <div className='mt-3'>
                            <h4 className='text-white'>Emily</h4>
                            <div className='d-flex justify-content-center gap-2 my-3'>
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                            </div>
                            <p className='text-white w-75 mx-auto'>I purchased the convertible car for my niece's birthday, and she absolutely adores it. The vibrant colors and the convertible top make it a stylish toy car. It's a hit!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center p-5 bg-card-color'>
                        <img src={'https://i.ibb.co/w6tNpmn/istockphoto-1200677760-612x612.jpg'} alt="" className='slider-img' />
                        <div className='mt-3'>
                            <h4 className='text-white'>Mark</h4>
                            <div className='d-flex justify-content-center gap-2 my-3'>
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/material-rounded/24/FFFFFF/star--v1.png" alt="star--v1" />
                                <img width="18" height="18" src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/star--v1.png" alt="star--v1" />
                            </div>
                            <p className='text-white w-75 mx-auto'>I bought the construction vehicle set for my son, and he's obsessed with it. The realistic functions like the moving parts and sounds make it a great toy for imaginative play. Excellent purchase!</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
};

export default CustomerTestimonialSlider;