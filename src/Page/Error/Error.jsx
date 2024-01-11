import { Link } from 'react-router-dom';
import error_2 from '../../assets/error.svg'
import PageTitle from '../../PageTitle/PageTitle';
import './Error.css';

const Error = () => {
    return (
        <div className='error-bg-color' style={{ height: '100vh' }}>
            <PageTitle title={'Error'}></PageTitle>
            <div className='text-center'>
                <img src={error_2} alt="" className='img-fluid' style={{ height: '90vh' }} />
                <div>
                    <p className='text-light opacity-75 d-inline-block fw-semibold mt-4'>Please Go To </p><Link to='/' className='text-light fw-bold ms-2'>Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;