import { NavLink } from 'react-router-dom';
import site_logo from '../assets/site-logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="bg-footer-color pt-5">
            <div className='container pb-3 mx-auto text-center row'>
                <div className="col-md-3">
                    <div>
                        <img src={site_logo} alt="Site-footer-logo" className='site-footer-logo' />
                        <p className='fw-semibold mt-3'>Discover a world of fun and excitement with our incredible collection of toy cars. Shop now for endless playtime adventures!</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <p className='fw-bold '>MENU</p>
                    <div>
                        <NavLink to='/' className='nav-link fw-semibold'>Home</NavLink>
                        <NavLink to='/all-toy' className='nav-link fw-semibold mt-3'>All Toys</NavLink>
                        <NavLink to='/my-toy' className='nav-link fw-semibold my-3'>My Toys</NavLink>
                        <NavLink to='/add-toy' className='nav-link fw-semibold mb-3'>Add A Toy</NavLink>
                        <NavLink to='/blog' className='nav-link fw-semibold'>Blog</NavLink>
                    </div>
                </div>
                <div className="col-md-5">
                    <p className='mb-0 mt-md-0 mt-4'><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/new-post.png" alt="new-post" /> <span className='fw-semibold'>robiulcoc420@gmail.com</span></p>
                    <p className='my-2'><img width="24" height="24" src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1" /> <span className='fw-semibold'>+880 1893187274</span></p>
                    <p className='mb-0'><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/address.png" alt="address" /> <span className='fw-semibold'>West goulchamot 1-no road new bus stand, <br /> Faridpur, Bangladesh</span></p>
                </div>
                <div className="col-md-2">
                    <div className='mt-md-0 mt-4'>
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
                </div>
            </div>
            <hr className='container' />
            <p className='fw-bold text-center pt-3 pb-3 mb-0'>Copyright &copy; TOY WORLD 2023</p>
        </footer>
    );
};

export default Footer;