// import React from 'react';
import site_logo from '../assets/site-logo.png'

const Footer = () => {
    return (
        <footer className="bg-light mt-5 pt-5 mb-0">
            <div className='container pb-3 d-flex justify-content-between align-items-center'>
                <div className='d-flex justify-content-start align-items-center'>
                    <img src={site_logo} alt="Site-footer-logo" style={{ width: '14%' }} />
                    <p className='fw-bold text-secondary ms-3 mt-3'>KID TOYS</p>
                </div>
                <div>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/6c757d/facebook-f.png" alt="facebook-f" style={{ cursor: 'pointer' }} />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/6c757d/twitter.png" alt="twitter" className='mx-3 my-2' style={{ cursor: 'pointer' }} />
                    </a>
                    <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
                        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/6c757d/instagram-new--v1.png" alt="instagram-new--v1" style={{ cursor: 'pointer' }} />
                    </a>
                </div>
                <p className='text-secondary'>West goulchamot 1-no road new bus stand, Faridpur.</p>
            </div>
            <hr className='container' />
            <p className='fw-semibold text-center text-secondary pt-3'>&copy; KID TOYS 2023</p>
        </footer>
    );
};

export default Footer;