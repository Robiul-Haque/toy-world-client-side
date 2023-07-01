import './Header.css'
import { NavLink } from 'react-router-dom';
import site_logo from '../assets/site-logo.png'
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';

const Header = () => {

    const { loginUser, logOut } = useContext(AuthContext);

    const handelLogOut = () => {
        logOut()
            .then(() => {
                console.log('sign out')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <nav className="navbar navbar-expand-lg bg-header-color">
            <div className="container">
                <NavLink to={'/'}>
                    <img src={site_logo} alt="Site-header-logo" className='navbar-brand site-header-logo' />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className='nav-link fw-semibold'>Home</NavLink>
                        </li>
                        <li className="nav-item mx-md-3">
                            <NavLink to='/all-toy' className='nav-link fw-semibold'>All Toys</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/my-toy' className='nav-link fw-semibold'>My Toys</NavLink>
                        </li>
                        <li className="nav-item  mx-md-3">
                            <NavLink to='/add-toy' className='nav-link fw-semibold'>Add A Toy</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/blog' className='nav-link fw-semibold'>Blog</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {
                            loginUser ?
                                <>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={loginUser?.photoURL} alt={loginUser?.displayName} title={loginUser?.displayName} className='img-fluid rounded-circle login-user-img' />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className='dropdown-item'>
                                                <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/exit.png" alt="exit" />
                                                <NavLink onClick={handelLogOut} className='nav-link fw-semibold d-inline'>Logout</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item me-md-3">
                                        <NavLink to='/login' className='nav-link fw-semibold'>Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/register' className='nav-link fw-semibold'>Register</NavLink>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;