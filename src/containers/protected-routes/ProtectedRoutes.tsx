import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface IProtectedRoutesProps {
  isLogin: boolean;
  redirectPath: string;
}
const ProtectedRoutes = (props: IProtectedRoutesProps) => {
  return (
    <div>
      {props.isLogin ? <Navigate to={props.redirectPath} /> : <Outlet />}
    </div>
  );
};

export default ProtectedRoutes;
