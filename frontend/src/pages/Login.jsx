import axios from "axios";
import React, { useState } from "react";
import { useAuth } from '../context/authContext';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        try {
            const response = await axios.post(
                "http://localhost:3000/api/auth/login", // API endpoint
                { email, password } // Request body
            );
    
            if (response.data.success) {
                login(response.data.user); // Call login method from context
                localStorage.setItem("token", response.data.token); // Store token
                
                // Navigate to the appropriate dashboard based on user role
                if (response.data.user.role === "admin") {
                    navigate('/admin-dashboard'); // Navigate to admin dashboard
                } else {
                    navigate('/employee-dashboard'); // Navigate to employee dashboard
                }
            } else {
                setError(response.data.error); // Set error message if login fails
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.error); // Set error message
            } else {
                setError("Server Error"); // Handle unexpected errors
            }
        }
    };

    return (
        <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-600  to-gray-100  space-y-6">
            <h2 className="font-Pacific text-3xl text-white">Employee Management System</h2>
            <div className="border shadow p-6 w-80 bg-white">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border"
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border"
                            placeholder="**********"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4 flex items-center justify-between">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2 text-gray-700">Remember me</span>
                        </label>
                        <a href="#" className="text-teal-600">Forgot password?</a>
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="w-full bg-teal-600 text-white py-2">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
