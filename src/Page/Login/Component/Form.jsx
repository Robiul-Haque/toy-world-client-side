// import React from 'react';
import { useContext } from 'react';
import './Form.css'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../Auth/AuthProvider';

const Form = () => {

    const { emailPassLogin, googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const from = '/';

    const loginWithEmailPass = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        emailPassLogin(email, password)
            .then(result => {
                form.reset();
                console.log(result.user);
                navigate(from);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const socialLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                navigate(from);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="container text-center my-md-5 py-md-5">
            <div className="row">
                <div className="col">
                </div>
                <div className="col shadow rounded p-md-5">
                    <h3 className="mb-md-5 text-secondary">Login</h3>
                    <form onSubmit={loginWithEmailPass} className='px-5'>
                        <div className="mb-3">
                            <label className="form-label text-secondary">Email</label>
                            <input type="email" name='email' className="form-control" placeholder='Your email' required />
                        </div>
                        <div className="mb-4">
                            <label className="form-label text-secondary">Password</label>
                            <input type="password" name='password' className="form-control" placeholder='Your password' required />
                        </div>
                        <input type="submit" value="Login" className='btn btn-dark' />
                    </form>
                    <p className="text-secondary my-3">Or login with</p>
                    <img onClick={socialLogin} width="45" height="45" className="border rounded-circle p-2 google-icon" src="https://img.icons8.com/material-rounded/24/737373/google-logo.png" alt="google-logo" />
                    <p className="text-secondary mt-4">You don,t have an account, <Link to='/register' className="text-dark fw-semibold">Register</Link> please</p>
                </div>
                <div className="col">
                </div>
            </div>
        </div>
    );
};

export default Form;