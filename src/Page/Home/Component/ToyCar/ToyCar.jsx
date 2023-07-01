/* eslint-disable react/prop-types */
import Rating from 'react-rating';
import './ToyCar.css';
import Modal from '../Modal/Modal';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../Auth/AuthProvider';
import { NavLink } from 'react-router-dom';

const ToyCar = ({ toy }) => {

    const { loginUser } = useContext(AuthContext);
    const [toyDetails, setToyDetails] = useState([]);

    const { name, image, price, rating } = toy || {};

    const handelToyDetails = (toyId) => {
        fetch(`http://localhost:5000/toy-car-details/${toyId}`)
            .then(res => res.json())
            .then(data => setToyDetails(data));
    }

    return (
        <>
            <div className="card card-width" data-aos="fade-left">
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
                        {
                            loginUser ? <button onClick={() => handelToyDetails(toy._id)} type="button" className="btn fw-semibold text-dark btn-color" data-bs-toggle="modal" data-bs-target="#exampleModal">See More</button> : <NavLink to={'/login'} className={'btn fw-semibold text-dark btn-color'}>See More</NavLink>
                        }
                    </div>
                </div>
            </div>
            <Modal toyDetails={toyDetails}></Modal>
        </>
    );
};

export default ToyCar;