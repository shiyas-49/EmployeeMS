import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDahboard';
import PrivateRoutes from './utils/PrivateRoutes';
import RoleBaseRoutes from './utils/RoleBaseRoutes';
import List from './components/employee/List';
import Departmentlist from './components/dashboard/Departmentlist';
import Add from './components/employee/Add'; // Import Add component

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Redirect to admin-dashboard */}
                <Route path="/" element={<Navigate to="/admin-dashboard" />} />

                {/* Login Route */}
                <Route path="/login" element={<Login />} />

                {/* Admin Dashboard Route with nested routes */}
                <Route path="/admin-dashboard" element={
                    <PrivateRoutes>
                        <RoleBaseRoutes requiredRole={["admin"]}>
                            <AdminDashboard /> {/* Admin Dashboard wraps the nested routes */}
                        </RoleBaseRoutes>
                    </PrivateRoutes>
                }>
                    {/* Nested Routes within AdminDashboard */}
                    <Route path="employees" element={<List />} />
                    <Route path="add-employee" element={<Add />} /> {/* Add New Employee */}
                    <Route path="departmentlist" element={<Departmentlist />} />
                </Route>

                {/* Employee Dashboard Route */}
                <Route path="/employee-dashboard" element={
                    <PrivateRoutes>
                        <EmployeeDashboard />
                    </PrivateRoutes>
                } />

                {/* Unauthorized Access */}
                <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
