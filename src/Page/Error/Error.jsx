// import React from 'react';
import { Link } from 'react-router-dom';
import error_2 from '../../assets/error.svg'

const Error = () => {
    return (
        <div className='text-center'>
            <img src={error_2} alt="" className='img-fluid' style={{ height: '90vh' }} />
            <p className='text-secondary fw-semibold mt-4'>Please Go To <Link to='/' className='text-dark fw-bold'>Home</Link></p>
        </div>
    );
};

export default Error;