import React from 'react'
import { Outlet } from "react-router-dom";


// ================== Ant Components ==================
import { Layout } from 'antd';



// ================== Components ==================
import HeaderComponent from './header/header';





const { Content } = Layout;




const LayoutComponent = ({ children }: any) => {

    // const { isAuthenticated } = useAuth();

    // console.log("Is authicated ===> ", isAuthenticated);



    return (
        <Layout className='bg-none'>

            <HeaderComponent />

            <Layout className='bg-none'>
                <Content>
                    {children || <Outlet />}
                </Content>
            </Layout>
        </Layout>
    )
}

export default LayoutComponent