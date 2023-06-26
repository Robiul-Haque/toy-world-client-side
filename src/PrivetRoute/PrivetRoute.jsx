/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const { loadingSpinner, loginUser } = useContext(AuthContext);
    const location = useLocation();

    if (loadingSpinner) {
        return <>
            <div className="row my-5">
                <div className="col-6"></div>
                <div className="col-1">
                    <div className="spinner-border text-white" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div className="col-5"></div>
            </div>
        </>
    }

    if (loginUser?.email) {
        return children
    } else {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
};

export default PrivetRoute;