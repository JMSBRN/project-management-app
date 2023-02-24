import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface IProps {
  auth: { isAuthenticated?: boolean };
}
const ProtectedRoutes = (props: IProps) => {
  const {
    auth: { isAuthenticated },
  } = props;
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
