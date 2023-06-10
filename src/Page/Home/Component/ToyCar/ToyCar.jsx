/* eslint-disable react/prop-types */
// import React from 'react';
import Rating from 'react-rating';
import './ToyCar.css'

const ToyCar = ({ toy }) => {

    const { name, image, price, rating } = toy || {};

    return (
        <div className="card card-width">
            <img src={image} className="card-img-top rounded img-fluid img-width" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="d-flex justify-content-between my-3">
                    <p className="card-text">Price {price}</p>
                    <div className='d-flex gap-3'>
                        <Rating
                            readonly
                            placeholderRating={rating}
                            emptySymbol={<img width="16" height="16" src="https://img.icons8.com/fluency-systems-regular/48/star--v1.png" alt="star icon" className='icon' />}
                            placeholderSymbol={<img width="16" height="16" src="https://img.icons8.com/material-rounded/24/star--v1.png" alt="star icon" className='icon' />}
                            fullSymbol={<img width="16" height="16" src="https://img.icons8.com/material-rounded/24/star--v1.png" alt="star icon" className='icon' />}
                        />
                        <p>{rating}</p>
                    </div>
                </div>
                <div className="text-center">
                    <a href="#" className="btn btn-dark">See More</a>
                </div>
            </div>
        </div>
    );
};

export default ToyCar;