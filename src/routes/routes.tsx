import React, { FC, lazy, LazyExoticComponent, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import RequireAuth from '../components/require-auth/require-auth';


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
const ABOUTPAGE = Loadable(lazy(() => import("../pages/about")));
const PRICINGPAGE = Loadable(lazy(() => import("../pages/pricing")));
const CONTACTUSPAGE = Loadable(lazy(() => import("../pages/contact-us")));
const UNAUTHORIZEDPAGE = Loadable(lazy(() => import("../pages/un-authorized")));



// =============== Authorized Pages ===============
const APPLAYOUT = Loadable(lazy(() => import("../layout/layout")));
const DASHBOARDPAGE = Loadable(lazy(() => import("../pages/dashboard")));







// =============== Restricted Routes ===============
const RESTRICTED_ROUTES = [
    { path: "/dashboard", element: <Navigate to="dashboard" /> },
    {
        path: "/",
        element: "Dashboard layout here",
        children: [
            {
                path: "dashboard",
                element: (
                    <RequireAuth>
                        <DASHBOARDPAGE />
                    </RequireAuth>
                )
            },
        ]
    }
];


// =============== Non-Restricted Routes ===============
const NONRESTRICTED_ROUTES = [
    { path: "/", element: <Navigate to="home" /> },
    { path: "*", element: <UNAUTHORIZEDPAGE /> },
];



// =============== Layout Routes ===============
// =============== Render Pages in Layout so write in children of APP_LAYOUT ===============
const LAYOUT_ROUTES = [
    { path: "/", element: <Navigate to="home" /> },
    { path: "*", element: <UNAUTHORIZEDPAGE /> },
    // { path: "/dashboard", element: <DASHBOARDPAGE /> },
    {
        path: "/",
        element: <APPLAYOUT />,
        children: [
            {
                path: "home",
                element: <HOMEPAGE />
            },
            {
                path: "about",
                element: <ABOUTPAGE />
            },
            {
                path: "pricing",
                element: <PRICINGPAGE />
            },
            {
                path: "contact-us",
                element: <CONTACTUSPAGE />
            },
            {
                path: "sign-in",
                element: <SIGNINPAGE />
            },
            {
                path: "sign-up",
                element: <SIGNUPPAGE />
            },
        ],
    },
];



// =============== Combine All Routes ===============
// export const ROUTES = [...RESTRICTED_ROUTES, ...LAYOUT_ROUTES];
export const ROUTES = [...LAYOUT_ROUTES];