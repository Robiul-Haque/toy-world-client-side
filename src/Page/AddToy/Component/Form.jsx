// import React from 'react';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../Auth/AuthProvider';

const Form = () => {
    const { loginUser } = useContext(AuthContext);
    console.log(loginUser);

    const addToy = event => {
        event.preventDefault();
        const form = event.target;
        const seller_name = form.seller_name.value;
        const email = loginUser?.email;
        const category = form.category.value;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = parseFloat(form.rating.value);
        const quantity = form.quantity.value;
        console.log(seller_name, email, category, name, image, price, quantity, rating);
        console.log(loginUser);
        const addToyData = { seller_name, email, category, name, image, price, rating, quantity };

        fetch('http://localhost:5000/add-toy', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(addToyData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Toy add successful!', {
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

        form.reset();
    }

    return (
        <div className="container text-center my-md-5 py-md-5">
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6 shadow rounded py-md-5">
                    <h3 className="mb-md-5 text-secondary">Add A New Toy</h3>
                    <form onSubmit={addToy}>
                        <div className='d-flex justify-content-md-evenly flex-md-row flex-sm-column'>
                            <div>
                                <div className="mb-4">
                                    <label className="form-label text-secondary">Seller Name</label>
                                    <input type="text" name='seller_name' className="form-control" placeholder='Seller name' defaultValue={loginUser?.displayName} required />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-secondary">Seller Email</label>
                                    <input type="email" name='email' className="form-control" defaultValue={loginUser?.email} disabled />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-secondary">Toy Category</label>
                                    <select className="form-select" name='category' required>
                                        <option value="Regular car" selected>Regular car</option>
                                        <option value="Sports car">Sports car</option>
                                        <option value="Regular truck">Regular truck</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-secondary">Toy Name</label>
                                    <input type="text" name='name' className="form-control" placeholder='Name' required />
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <label className="form-label text-secondary">Toy Image</label>
                                    <input type="url" name='image' className="form-control" placeholder='Image' required />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-secondary">Toy Price</label>
                                    <input type="number" name='price' className="form-control" placeholder='Price' required />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-secondary">Toy Quantity</label>
                                    <input type="number" name='quantity' className="form-control" placeholder='Quantity' required min='1' max='100000' />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-secondary">Toy Rating</label>
                                    <input type="text" name='rating' className="form-control" placeholder='Rating' required />
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Add Toy" className='btn btn-dark mt-2' />
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

export default Form;