import React from 'react'
import { Outlet } from "react-router-dom";


// ================== Ant Components ==================
import { Layout } from 'antd';



// ================== Components ==================
import HeaderComponent from './header/header';




// ================== HOOKs ==================
import useAuth from '../../hooks/useAuth';



const { Content } = Layout;




const LayoutComponent = () => {

    const { isAuthenticated } = useAuth();

    console.log("Is authicated ===> ", isAuthenticated);



    return (
        <Layout className='bg-none'>
            <Layout className='bg-none'>
                <div className='relative'>
                    <HeaderComponent />
                </div>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default LayoutComponent