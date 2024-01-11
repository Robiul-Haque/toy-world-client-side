// import React from 'react';
import { useContext, useState } from 'react';
import './Form.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../Auth/AuthProvider';

const Form = () => {

    const { emailPassLogin, googleLogin } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const loginWithEmailPass = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setErrorMessage('');

        emailPassLogin(email, password)
            .then(() => {
                form.reset();
                // console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                // console.log(error);
                setErrorMessage(error.message);
            })
    }

    const socialLogin = () => {
        googleLogin()
            .then(() => {
                // console.log(result.user);
                navigate(from);
            })
            .catch(error => {
                // console.log(error);
                setErrorMessage(error.message);
            })
    }

    return (
        <div className="container text-center my-md-5 py-md-5">
            <div className="row">
                <div className="col-md-4 col-0">
                </div>
                <div className="col-md-4 col-12 shadow rounded px-md-4 py-md-5 py-5">
                    <h3 className="mb-md-5 mb-4 fw-bold form-heading">Login Your Account</h3>
                    <form onSubmit={loginWithEmailPass} className='px-5'>
                        <div className="mb-3">
                            <label className="form-label text-secondary">Email</label>
                            <input type="email" name='email' className="form-control" placeholder='Your email' required />
                        </div>
                        <div className="mb-4">
                            <label className="form-label text-secondary">Password</label>
                            <input type="password" name='password' className="form-control" placeholder='Your password' required />
                        </div>
                        <input type="submit" value="Login" className='btn fw-semibold btn-color' />
                    </form>
                    <p className="text-secondary my-md-4 mt-5">Or login with</p>
                    <img onClick={socialLogin} width="46" height="46" className="p-2 google-icon" src="https://img.icons8.com/material-sharp/24/6753fd/google-logo.png" alt="google-logo" />
                    <p className="text-secondary my-4">You don,t have an account, <Link to='/register' className="text-light opacity-75 fw-semibold">Register</Link> please</p>
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