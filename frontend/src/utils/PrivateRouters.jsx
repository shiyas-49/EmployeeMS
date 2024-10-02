import React from "react";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading....</div>; // Fixed return statement
    }

    return user ? children : <Navigate to="/login" />; // Redirect to login if not authenticated
};

export default PrivateRoutes;
