import { Fragment, ReactNode } from "react";
import { Navigate } from "react-router-dom";


// component props interface
interface GuestGuardProps {
    children: ReactNode;
}



const GuestGuard = ({ children }: GuestGuardProps) => {
    const { role }: any = JSON.parse(localStorage.getItem("user") || "{}");

    //// HIDE AUTH PAGES TO AUTHENTICATED USERS
    if (role) return <Navigate to="/dashboard" />;

    return <Fragment>{children}</Fragment>;
};

export default GuestGuard;
