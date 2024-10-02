import React from "react";
import { NavLink } from 'react-router-dom';
import { FaBuilding, FaTachometerAlt, FaUsers } from 'react-icons/fa';

const AdminSidebar = () => {
    return (
        <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
            <div className="bg-teal-600 h-12 flex items-center justify-center">
                <h3 className="text-2xl text-center font-pacific">Employee MS</h3>
            </div>
            <div>
                {/* Dashboard Link */}
                <NavLink 
                    to="/admin-dashboard" 
                    className={({ isActive }) => 
                        `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`
                    }
                >
                    <FaTachometerAlt />
                    <span>Dashboard</span>
                </NavLink>

                {/* Employees Link */}
                <NavLink 
                    to="/admin-dashboard/employees" 
                    className={({ isActive }) => 
                        `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`
                    }
                >
                    <FaUsers />
                    <span>Employees</span>
                </NavLink>

                {/* Departments Link */}
                <NavLink 
                    to="/admin-dashboard/departmentlist" 
                    className={({ isActive }) => 
                        `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`
                    }
                >
                    <FaBuilding />
                    <span>Departments</span>
                </NavLink>
            </div>
        </div>
    );
};

export default AdminSidebar;
