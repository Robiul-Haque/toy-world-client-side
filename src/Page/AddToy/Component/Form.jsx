// import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    const addToy = event => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = parseFloat(form.rating.value);
        console.log(category, name, image, price, rating);
        const addToyData = { category, name, image, price, rating };

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
                <div className="col">
                </div>
                <div className="col shadow rounded p-md-5">
                    <h3 className="mb-md-5 text-secondary">Add A New Toy</h3>
                    <form onSubmit={addToy} className='px-5'>
                        <div className="mb-3">
                            <label className="form-label text-secondary">Category</label>
                            <select className="form-select" name='category' required>
                                <option value="Regular car" selected>Regular car</option>
                                <option value="Sports car">Sports car</option>
                                <option value="Regular truck">Regular truck</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-secondary">Name</label>
                            <input type="text" name='name' className="form-control" placeholder='Toy name' required />
                        </div>
                        <div className="mb-4">
                            <label className="form-label text-secondary">Image</label>
                            <input type="url" name='image' className="form-control" placeholder='Toy image' required />
                        </div>
                        <div className="mb-4">
                            <label className="form-label text-secondary">Price</label>
                            <input type="number" name='price' className="form-control" placeholder='Toy price' required />
                        </div>
                        <div className="mb-4">
                            <label className="form-label text-secondary">Rating</label>
                            <input type="text" name='rating' className="form-control" placeholder='Toy rating' required />
                        </div>
                        <input type="submit" value="Add" className='btn btn-dark' />
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
                <div className="col">
                </div>
            </div>
        </div>
    );
};

export default Form;