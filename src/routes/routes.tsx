import React, { FC, lazy, LazyExoticComponent, Suspense } from 'react';
import { Navigate } from 'react-router-dom';




// =============================== Guards ===============================
import AuthGuard from '../guards/auth-guard';
import GuestGuard from '../guards/guest-guard';




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
    { path: "/", element: <Navigate to="dashboard" /> },
    {
        path: "/",
        element: (
            <AuthGuard>
                <APPLAYOUT />
            </AuthGuard>
        ),
        children: [
            {
                path: "dashboard",
                element: <DASHBOARDPAGE />
            },

        ]
    },
    { path: "*", element: <UNAUTHORIZEDPAGE /> },

];


// =============== Non-Restricted Routes ===============
const NONRESTRICTED_ROUTES = [
    { path: "/", element: <Navigate to="home" /> },
    // {
    //     path: "/home",
    //     element: (
    //         <APPLAYOUT>
    //             <HOMEPAGE />
    //         </APPLAYOUT>
    //     )
    // },
    // {
    //     path: "/about",
    //     element: (
    //         <APPLAYOUT>
    //             <ABOUTPAGE />
    //         </APPLAYOUT>
    //     )
    // },
    {
        path: "/",
        element: (
            <GuestGuard>
                <APPLAYOUT />
            </GuestGuard>
        ),
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



// =============== ROLE BASED Layout Routes ===============

const ROLES_ROUTES: any = {
    admin: RESTRICTED_ROUTES,
    user: NONRESTRICTED_ROUTES,
};



export const ROUTES = (role: any) => {
    return ROLES_ROUTES[role] ?? NONRESTRICTED_ROUTES
}