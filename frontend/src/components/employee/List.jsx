import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const List = () => {
    return (
        <div className="p-6">
        <div className="text-center">
            <h3 className="text-2xl font-bold">Manage Employee</h3>
            
            <div className="flex justify-between items-center mt-4">
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search by Dep Name"
                    className="px-4 py-0.5 border"
                />
                
                {/* Add New Employee Button */}
                <Link
                    to="/admin-dashboard/add-employee"
                    className="px-4 py-1 bg-teal-600 rounded text-white"
                >
                    Add New Employee
                </Link>
            </div>
        </div>
        </div>
    );
};

export default List;
