import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface IProps {
  auth: { isAuthenticated?: boolean };
}
const ProtectedRoutes = ({ auth: { isAuthenticated } }: IProps) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
