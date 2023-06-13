import React, { FC, lazy, LazyExoticComponent, Suspense } from 'react';
import { Navigate } from 'react-router-dom';


// ============== Page Loading Behaviour ============== //
const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
(
    <Suspense
        fallback={
            <div>Loading . . .</div>
        }
    >
        <Component {...props} />
    </Suspense>
);


// ======================================================================================= //
// =============================== Pages with Lazy Loading =============================== //
// ======================================================================================= //


// =============== AUTH Pages =============== //
const SIGNINPAGE = Loadable(lazy(() => import("../pages/sign-in")));
const SIGNUPPAGE = Loadable(lazy(() => import("../pages/sign-up")));




// =============== Un-Restricted Pages =============== //
const HOMEPAGE = Loadable(lazy(() => import("../pages/home")));



// =============== Authorized Pages ===============
const DASHBOARDPAGE = Loadable(lazy(() => import("../pages/dashboard")));





export const ROUTES = [

    { path: "/", element: <Navigate to="dashboard" /> },
    { path: "/dashboard", element: <DASHBOARDPAGE /> },
    { path: "/sign-in", element: <SIGNINPAGE /> },
    { path: "/sign-up", element: <SIGNUPPAGE /> },
    { path: "/home", element: <HOMEPAGE /> },

]