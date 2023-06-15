import React, { FC, lazy, LazyExoticComponent, Suspense } from 'react';
import { Navigate } from 'react-router-dom';


// ============== Page Loading Behaviour ============== //
const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
(
    <Suspense fallback={<div>Loading . . .</div>}>
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
const UNAUTHORIZEDPAGE = Loadable(lazy(() => import("../pages/un-authorized")));



// =============== Authorized Pages ===============
const APPLAYOUT = Loadable(lazy(() => import("../components/layout/layout")));
const DASHBOARDPAGE = Loadable(lazy(() => import("../pages/dashboard")));







// =============== Restricted Routes ===============
const RESTRICTED_ROUTES = [
    { path: "/dashboard", element: <DASHBOARDPAGE /> },
];


// =============== Non-Restricted Routes ===============
const NONRESTRICTED_ROUTES = [
    { path: "/", element: <Navigate to="home" /> },
    { path: "*", element: <UNAUTHORIZEDPAGE /> },
];



// =============== Layout Routes ===============
const LAYOUT_ROUTES = [
    {
        path: "/",
        element: <APPLAYOUT />,
        children: [
            { path: "home", element: <HOMEPAGE /> },
            { path: "sign-in", element: <SIGNINPAGE /> },
            { path: "sign-up", element: <SIGNUPPAGE /> },
            ...RESTRICTED_ROUTES,
        ],
    },
];



// =============== Combine All Routes ===============
export const ROUTES = [...NONRESTRICTED_ROUTES, ...LAYOUT_ROUTES];