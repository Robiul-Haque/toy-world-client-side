/* eslint-disable react/prop-types */
// import React from 'react';
import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";

const Table = () => {

    const allToys = useLoaderData();
    const [singleToyDetails, setSingleToyDetails] = useState([]);

    const toyDetails = toyId => {
        fetch(`http://localhost:5000/toy-details/${toyId}`)
            .then(res => res.json())
            .then(data => setSingleToyDetails(data))
    }

    return (
        <div className="container my-5">
            <table className="table table-hover table-responsive text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Toy Name</th>
                        <th>Seller Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {
                        allToys.map((toy, index) => {
                            return <>
                                <tr className="align-middle">
                                    <th>{index + 1}</th>
                                    <td style={{ width: '15%' }}><img src={toy?.image} className="img-fluid w-75 rounded toy-image" /></td>
                                    <td>{toy?.name}</td>
                                    <td>{toy?.seller_name}</td>
                                    <td>{toy?.category}</td>
                                    <td>{toy?.price}</td>
                                    <td>{toy?.quantity}</td>
                                    <td><button onClick={() => toyDetails(toy._id)} type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button></td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </table>
            <Modal singleToyDetails={singleToyDetails}></Modal>
        </div>
    );
};

export default Table;