// import React from 'react';
import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Update = () => {

    const { loginUser } = useContext(AuthContext);
    const singleToy = useLoaderData();

    const updateToy = event => {
        event.preventDefault();
        const form = event.target;
        const seller_name = form.seller_name.value;
        const email = loginUser?.email;
        const category = form.category.value;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = parseFloat(form.rating.value);
        const description = form.description.value;
        const updateToyData = { seller_name, email, category, name, image, price, quantity, rating, description };

        fetch(`https://toy-world-weld.vercel.app/update-my-toy/${singleToy._id}`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToyData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Toy update successful!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            })
    }

    return (
        <div className="container text-center my-md-5 py-md-5 my-5">
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6 shadow rounded py-md-5">
                    <h3 className="mb-md-5 mb-4 text-white fw-bold">Update Toy</h3>
                    <form onSubmit={updateToy} className="py-4 px-2">
                        <div className='d-flex justify-content-md-evenly flex-md-row flex-column'>
                            <div>
                                <div className="mb-4">
                                    <label className="form-label text-white">Seller Name</label>
                                    <input type="text" name='seller_name' className="form-control fw-semibold" placeholder='Seller name' defaultValue={loginUser?.displayName} required />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-white">Seller Email</label>
                                    <input type="email" name='email' className="form-control fw-semibold" defaultValue={loginUser?.email} disabled />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-white">Toy Category</label>
                                    <select className="form-select fw-semibold" name='category' defaultValue={singleToy?.category} required>
                                        <option value="Regular car">Regular car</option>
                                        <option value="Sports car">Sports car</option>
                                        <option value="Regular truck">Regular truck</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-white">Toy Name</label>
                                    <input type="text" name='name' className="form-control fw-semibold" defaultValue={singleToy?.name} required />
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <label className="form-label text-white">Toy Image</label>
                                    <input type="url" name='image' className="form-control fw-semibold" defaultValue={singleToy?.image} required />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-white">Toy Price</label>
                                    <input type="number" name='price' className="form-control fw-semibold" defaultValue={singleToy?.price} required />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-white">Toy Quantity</label>
                                    <input type="number" name='quantity' className="form-control fw-semibold" defaultValue={singleToy?.quantity} required min='1' max='100000' />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-white">Toy Rating</label>
                                    <input type="text" name='rating' className="form-control fw-semibold" defaultValue={singleToy?.rating} required />
                                </div>
                            </div>
                        </div>
                        <div className="mx-md-5 px-md-4">
                            <label className="form-label text-white">Toy Description</label>
                            <textarea name="description" className="form-control fw-semibold" defaultValue={singleToy?.description} rows='2'></textarea>
                        </div>
                        <input type="submit" value="Update Toy" className='btn btn-color fw-semibold mt-4' />
                    </form>
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
                <div className="col-md-3">
                </div>
            </div>
        </div>
    );
};

export default Update;