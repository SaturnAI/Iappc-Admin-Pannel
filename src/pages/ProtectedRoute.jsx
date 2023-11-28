import React from 'react';
import { useNavigate, Outlet, Navigate } from 'react-router-dom';


const ProtectedRoute = ({ isAuthenticated, children, auth }) => {

    if (!isAuthenticated) {
        return <Navigate to={"/landing"} replace={true} />
    }
    else {
        return <Outlet /> 
    }
}

export default ProtectedRoute