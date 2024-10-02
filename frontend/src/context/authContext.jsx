import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Start loading as true

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const token = localStorage.getItem("token");
                if (token) {
                    const response = await axios.get("http://localhost:3000/api/auth/verify", {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                        },
                    });
                    console.log(response);
                    if (response.data.success) {
                        setUser(response.data.user);
                    } else {
                        setUser(null); // Clear user if verification fails
                    }
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.log(error);
                if (error.response && !error.response.data.error) {
                    setUser(null);
                }
            } finally {
                setLoading(false); // Set loading to false after verification
            }
        };
        verifyUser();
    }, []);

    const login = (user) => {
        setUser(user);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    };

    return (
        <UserContext.Provider value={{ user, login, logout, loading }}>
            {children}  {/* Render children inside the provider */}
        </UserContext.Provider>
    );
};

export const useAuth = () => useContext(UserContext);
export default AuthProvider; // Exporting AuthProvider
