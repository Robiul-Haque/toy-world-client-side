/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Table = () => {

    const { loginUser } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [singleToyDetails, setSingleToyDetails] = useState([]);
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const [reload, setReload] = useState(null);

    useEffect(() => {
        setLoadingSpinner(true);
        fetch(`http://localhost:5000/my-toy/${loginUser?.email}`)
            .then(res => res.json())
            .then(data => {
                setLoadingSpinner(false);
                setMyToys(data)
            })
    }, [reload]);

    const toyDetails = toyId => {
        fetch(`http://localhost:5000/toy-details/${toyId}`)
            .then(res => res.json())
            .then(data => setSingleToyDetails(data))
    };

    const deleteMyYoy = toyId => {
        const confirmText = confirm("Are you sure you want to delete");
        if (confirmText === true) {
            console.log(confirmText, toyId);
            fetch(`http://localhost:5000/delete-my-toy/${toyId}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        toast.success('Toy delete successful!', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                        setReload(!reload);
                    }
                })
        }
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
                                        <button onClick={() => deleteMyYoy(myToy?._id)} className="btn btn-dark">Delete</button>
                                    </td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </table>
            {
                loadingSpinner && <div className="text-center mt-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <Modal singleToyDetails={singleToyDetails}></Modal>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default Table;