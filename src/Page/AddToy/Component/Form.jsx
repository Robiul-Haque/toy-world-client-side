import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';
import { AuthContext } from '../../../Auth/AuthProvider';

const Form = () => {
    const { loginUser } = useContext(AuthContext);

    const addToy = event => {
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
        const addToyData = { seller_name, email, category, name, image, price, quantity, rating, description };

        fetch('https://toy-world-weld.vercel.app/add-toy', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(addToyData)
        })
            .then(res => res.json())
            .then(data => {
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
        <div className="container text-center py-md-5 py-5">
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6 py-md-5 shadow rounded">
                    <h3 className="mb-md-5 mb-4 text-white">Add A New Toy</h3>
                    <form onSubmit={addToy} className="py-4 px-2">
                        <div className='d-flex justify-content-md-evenly flex-md-row flex-column'>
                            <div>
                                <div className="mb-4">
                                    <label className="form-label text-light">Seller Name</label>
                                    <input type="text" name='seller_name' className="form-control fw-semibold" placeholder='Seller name' defaultValue={loginUser?.displayName} required />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-light">Seller Email</label>
                                    <input type="email" name='email' className="form-control fw-semibold" defaultValue={loginUser?.email} disabled />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-light">Toy Category</label>
                                    <select className="form-select fw-semibold" name='category' required>
                                        <option value="Regular car" selected>Regular car</option>
                                        <option value="Sports car">Sports car</option>
                                        <option value="Regular truck">Regular truck</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-light">Toy Name</label>
                                    <input type="text" name='name' className="form-control fw-semibold" placeholder='Name' required />
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <label className="form-label text-light">Toy Image</label>
                                    <input type="url" name='image' className="form-control fw-semibold" placeholder='Image' required />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-light">Toy Price</label>
                                    <input type="number" name='price' className="form-control fw-semibold" placeholder='Price' required />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-light">Toy Quantity</label>
                                    <input type="number" name='quantity' className="form-control fw-semibold" placeholder='Quantity' required min='1' max='100000' />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-light">Toy Rating</label>
                                    <input type="text" name='rating' className="form-control fw-semibold" placeholder='Rating' required />
                                </div>
                            </div>
                        </div>
                        <div className="mx-md-5 px-md-4">
                            <label className="form-label text-light">Toy Description</label>
                            <textarea name="description" className="form-control fw-semibold" rows='2'></textarea>
                        </div>
                        <input type="submit" value="Add Toy" className='btn btn-color fw-semibold text-dark mt-4' />
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