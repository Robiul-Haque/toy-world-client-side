/* eslint-disable react/prop-types */
// import React from 'react';
// import './Table.css'
import { useLoaderData } from "react-router-dom";

const Table = () => {

    const allToys = useLoaderData();

    return (
        <div className="container my-5">
            <table className="table table-hover table-responsive">
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
                                    <td><img src={toy?.image} className="img-fluid w-25 rounded toy-image" /></td>
                                    <td>{toy?.name}</td>
                                    <td>{toy?.seller_name}</td>
                                    <td>{toy?.category}</td>
                                    <td>{toy?.price}</td>
                                    <td>{toy?.quantity}</td>
                                    <td><button className="btn btn-dark">View Details</button></td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;