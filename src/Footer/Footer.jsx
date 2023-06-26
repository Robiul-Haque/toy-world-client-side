import { NavLink } from 'react-router-dom';
import site_logo from '../assets/site-logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="bg-footer-color pt-5">
            <div className='container pb-3 mx-auto text-center row'>
                <div className="col-md-2">
                    <div className='d-flex justify-content-start align-items-center'>
                        <img src={site_logo} alt="Site-footer-logo" style={{ width: '30%' }} />
                        <p className='fw-bold ms-3'>TOY WORLD</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='d-flex justify-content-between align-items-center'>
                        <NavLink to='/' className='nav-link fw-semibold'>Home</NavLink>
                        <NavLink to='/all-toy' className='nav-link fw-semibold'>All Toys</NavLink>
                        <NavLink to='/my-toy' className='nav-link fw-semibold'>My Toys</NavLink>
                        <NavLink to='/add-toy' className='nav-link fw-semibold'>Add A Toy</NavLink>
                        <NavLink to='/blog' className='nav-link fw-semibold'>Blog</NavLink>
                    </div>
                </div>
                <div className="col-md-2">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/facebook-f--v1.png" alt="facebook-f" style={{ cursor: 'pointer' }} />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/twitter.png" alt="twitter" className='mx-4 my-2' style={{ cursor: 'pointer' }} />
                    </a>
                    <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
                        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/instagram-new--v1.png" alt="instagram-new--v1" style={{ cursor: 'pointer' }} />
                    </a>
                </div>
                <div className="col-md-4">
                    <p className='mb-0'><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/new-post.png" alt="new-post" /> <span className='fw-semibold'>robiulcoc420@gmail.com</span></p>
                    <p className='my-2'><img width="24" height="24" src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1" /> <span className='fw-semibold'>+880 1893187274</span></p>
                    <p className='mb-0'><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/address.png" alt="address" /> <span className='fw-semibold'>West goulchamot 1-no road new bus stand, Faridpur, Bangladesh</span></p>
                </div>
            </div>
            <hr className='container' />
            <p className='fw-semibold text-center pt-3 pb-3 mb-0'>Copyright &copy; KID TOYS 2023</p>
        </footer>
    );
};

export default Footer;