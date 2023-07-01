/* eslint-disable react/prop-types */
import './Modal.css';

const Modal = ({ toyDetails }) => {

    const { name, image, seller_name, category, price, quantity, description } = toyDetails || {};

    return (
        <div className="modal fade" data-bs-backdrop="static" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content all-toy-modal-bg-color">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-white fw-bold" id="exampleModalLabel">{name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-md-flex gap-4 align-items-center">
                            <img src={image} alt={name} className="img-fluid w-50 h-50 rounded mb-3" />
                            <div>
                                <p className='text-light'>Seller Name: <span className="fw-semibold text-white"></span>{seller_name}</p>
                                <p className='text-light'>Toy Name: <span className="fw-semibold text-white"></span>{name}</p>
                                <p className='text-light'>Toy Category: <span className="fw-semibold text-white"></span>{category}</p>
                                <p className='text-light'>Toy Price: <span className="fw-semibold text-white"></span>{price}</p>
                                <p className='text-light'>Toy Quantity: <span className="fw-semibold text-white"></span>{quantity}</p>
                            </div>
                        </div>
                        <p className='text-light'>Toy Description: <br /><span className="fw-semibold text-white">{description}</span></p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn fw-semibold btn-color" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;