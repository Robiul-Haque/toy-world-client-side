/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";

const Table = () => {

    const { loginUser } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [singleToyDetails, setSingleToyDetails] = useState([]);
    const [loadingSpinner, setLoadingSpinner] = useState(false);

    useEffect(() => {
        setLoadingSpinner(true);
        fetch(`http://localhost:5000/my-toy/${loginUser?.email}`)
            .then(res => res.json())
            .then(data => {
                setLoadingSpinner(false);
                setMyToys(data)
            })
    }, []);

    const toyDetails = toyId => {
        fetch(`http://localhost:5000/toy-details/${toyId}`)
            .then(res => res.json())
            .then(data => setSingleToyDetails(data))
    };

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
                {
                    loadingSpinner && <>
                        <div className="spinner-border mt-5" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </>
                }
                <tbody className="table-group-divider">
                    {
                        myToys.map((myToy, index) => {
                            return <>
                                <tr className="align-middle">
                                    <th scope="row">{index + 1}</th>
                                    <td style={{ width: '15%' }}><img src={myToy?.image} className="img-fluid w-75 rounded" /></td>
                                    <td>{myToy?.name}</td>
                                    <td>{myToy?.seller_name}</td>
                                    <td>{myToy?.category}</td>
                                    <td>{myToy?.price}</td>
                                    <td>{myToy?.quantity}</td>
                                    <td><button onClick={() => toyDetails(myToy?._id)} type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                                        <NavLink to={`/update-my-toy/${myToy?._id}`}><button className="btn btn-dark mx-3 my-3">Update</button></NavLink>
                                        <button className="btn btn-dark">Delete</button>
                                    </td>
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