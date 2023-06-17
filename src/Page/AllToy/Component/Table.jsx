/* eslint-disable react/prop-types */
// import React from 'react';

const Table = (props) => {

    const { image, name, seller_name, category, price, quantity } = props.toy;

    return (
        <div className="container my-5">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Toy Name</th>
                        <th scope="col">Seller Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="align-middle">
                        <th scope="row">1</th>
                        <td><img src={image} alt={name} className="img-fluid w-25 rounded" /></td>
                        <td>{name}</td>
                        <td>{seller_name}</td>
                        <td>{category}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                        <td><button className="btn btn-dark">View Details</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;