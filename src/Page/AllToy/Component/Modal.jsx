/* eslint-disable react/prop-types */
// import React from 'react';

const Modal = (props) => {

    const { image, seller_name, name, category, price, quantity, description } = props.singleToyDetails || {};

    return (
        <div className="modal fade" data-bs-backdrop="static" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex gap-4 align-items-center">
                            <img src={image} alt={name} className="img-fluid w-50 h-50 rounded" />
                            <div>
                                <p>Seller Name: <span className="fw-semibold">{seller_name}</span></p>
                                <p>Toy Name: <span className="fw-semibold">{name}</span></p>
                                <p>Toy Category: <span className="fw-semibold">{category}</span></p>
                                <p>Toy Price: <span className="fw-semibold">{price}</span></p>
                                <p>Toy Quantity: <span className="fw-semibold">{quantity}</span></p>
                            </div>
                        </div>
                        <p>Toy Description: <br /><span className="fw-semibold">{description}</span></p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;