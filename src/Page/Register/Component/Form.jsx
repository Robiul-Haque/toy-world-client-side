import './Form.css'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";
import { updateProfile } from "firebase/auth";

const Form = () => {

    const { registration } = useContext(AuthContext);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const registerForm = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, image, email, password);

        setSuccessMessage('');
        setErrorMessage('');

        registration(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                updateUserInfo(user, name, image);
            })
            .catch(error => {
                console.log(error);
                setErrorMessage(error.message);
            })

        const updateUserInfo = (user, name, image) => {
            updateProfile(user, {
                displayName: name,
                photoURL: image
            })

            form.reset();
            setSuccessMessage('Registration successful');
        }
    }

    return (
        <div className="container text-center my-md-5 py-md-5">
            <div className="row">
                <div className="col-md-4 col-0">
                </div>
                <div className="col-md-4 my-5 col-12 shadow rounded p-md-5">
                    <h3 className="mb-md-5 mb-4 fw-bold form-heading">Create Your Account</h3>
                    <form onSubmit={registerForm} className='px-5'>
                        <div className="mb-3">
                            <label className="form-label text-secondary">Name</label>
                            <input type="text" name='name' className="form-control" placeholder='Enter your name' required />
                        </div>
                        <div className="mb-4">
                            <label className="form-label text-secondary">Image</label>
                            <input type="url" name='image' className="form-control" placeholder='Enter your image URL' required />
                        </div>
                        <div className="mb-4">
                            <label className="form-label text-secondary">Email</label>
                            <input type="email" name='email' className="form-control" placeholder='Enter your email' required />
                        </div>
                        <div className="mb-4">
                            <label className="form-label text-secondary">Password</label>
                            <input type="password" name='password' className="form-control" placeholder='Enter your new password' required />
                        </div>
                        <input type="submit" value="Register" className='btn fw-semibold btn-color' />
                    </form>
                    <p className="text-secondary my-4">You have an already account, <Link to='/login' className="text-light opacity-75 fw-semibold">Login</Link> please</p>
                    {
                        successMessage && <p className="alert alert-success fw-semibold" role="alert"><img width="22" height="22" className="me-3" src="https://img.icons8.com/fluency-systems-filled/48/0f5137/ok--v1.png" alt="ok--v1" />{successMessage}</p>
                    }
                    {
                        errorMessage && <p className="alert alert-danger fw-semibold" role="alert"><img width="22" height="22" className="me-3" src="https://img.icons8.com/ios-glyphs/30/842029/error--v1.png" alt="error--v1" />{errorMessage}</p>
                    }
                </div>
                <div className="col-md-4 col-0">
                </div>
            </div>
        </div>
    );
};

export default Form;