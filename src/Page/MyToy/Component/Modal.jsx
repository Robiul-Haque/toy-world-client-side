/* eslint-disable react/prop-types */
import './Modal.css';

const Modal = ({ singleToyDetails }) => {

    const { image, seller_name, name, category, price, quantity, description } = singleToyDetails || {};

    return (
        <div className="modal fade" data-bs-backdrop="static" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content my-toy-modal-bg-color">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">{name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex gap-4 align-items-center">
                            <img src={image} alt={name} className="img-fluid w-50 h-50 rounded" />
                            <div>
                                <p className="text-light">Seller Name: <span className="fw-semibold text-white">{seller_name}</span></p>
                                <p className="text-light">Toy Name: <span className="fw-semibold text-white">{name}</span></p>
                                <p className="text-light">Toy Category: <span className="fw-semibold text-white">{category}</span></p>
                                <p className="text-light">Toy Price: <span className="fw-semibold text-white">{price}</span></p>
                                <p className="text-light">Toy Quantity: <span className="fw-semibold text-white">{quantity}</span></p>
                            </div>
                        </div>
                        <p className="text-light">Toy Description: <br /><span className="fw-semibold text-white">{description}</span></p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-color fw-semibold" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;