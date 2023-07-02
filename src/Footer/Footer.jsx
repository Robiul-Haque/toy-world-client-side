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
                        <p className='text-white mt-3'>Discover a world of fun and excitement with our incredible collection of toy cars. Shop now for endless playtime adventures!</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <p className='fw-bold text-white'>MENU</p>
                    <div>
                        <NavLink to='/' className='nav-link fw-semibold text-white'>Home</NavLink>
                        <NavLink to='/all-toy' className='nav-link fw-semibold mt-3 text-white'>All Toys</NavLink>
                        <NavLink to='/my-toy' className='nav-link fw-semibold my-3 text-white'>My Toys</NavLink>
                        <NavLink to='/add-toy' className='nav-link fw-semibold mb-3 text-white'>Add A Toy</NavLink>
                        <NavLink to='/blog' className='nav-link fw-semibold text-white'>Blog</NavLink>
                    </div>
                </div>
                <div className="col-md-5">
                    <p className='text-white mb-0 mt-md-0 mt-4'><img width="24" height="24" src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/new-post.png"  alt="new-post" /> robiulcoc420@gmail.com</p>
                    <p className='text-white my-2'><img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/phone--v1.png"  alt="phone--v1" /> +880 1893187274</p>
                    <p className='text-white mb-0'><img width="24" height="24" src="https://img.icons8.com/ios-filled/50/FFFFFF/marker-o.png" alt="address" /> West goulchamot 1-no road new bus stand, <br /> Faridpur, Bangladesh</p>
                </div>
                <div className="col-md-2">
                    <div className='mt-md-0 mt-4'>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/FFFFFF/facebook-f.png" alt="facebook-f" style={{ cursor: 'pointer' }} />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FFFFFF/twitter.png" alt="twitter" className='mx-4 my-2' style={{ cursor: 'pointer' }} />
                        </a>
                        <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
                            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FFFFFF/instagram-new.png"  alt="instagram-new--v1" style={{ cursor: 'pointer' }} />
                        </a>
                    </div>
                </div>
            </div>
            <hr className='container text-white' />
            <p className='fw-bold text-center text-white pt-3 pb-3 mb-0'>Copyright &copy; TOY WORLD 2023</p>
        </footer>
    );
};

export default Footer;