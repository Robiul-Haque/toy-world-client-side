// import React from 'react';

const Form = () => {

    const addToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        console.log(name, image, price, rating);
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
                            <input type="number" name='rating' className="form-control" placeholder='Toy rating' required />
                        </div>
                        <input type="submit" value="Add" className='btn btn-dark' />
                    </form>
                </div>
                <div className="col">
                </div>
            </div>
        </div>
    );
};

export default Form;