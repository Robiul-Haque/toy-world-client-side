/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const { loadingSpinner, loginUser } = useContext(AuthContext);
    const location = useLocation();

    if (loadingSpinner) {
        <div className="row">
            <div className="col-6"></div>
            <div className="col-1">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <div className="col-5"></div>
        </div>
    }

    if (loginUser?.email) {
        return children;
    } else {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
};

export default PrivetRoute;