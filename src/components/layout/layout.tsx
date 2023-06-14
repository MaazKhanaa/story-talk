import React from 'react'


// ================== Ant Components ==================
import { Layout } from 'antd'



// ================== Components ==================
import HeaderComponent from './header/header';



const { Content } = Layout;


const LayoutComponent = ({ children }: any) => {
    return (
        <Layout className='bg-none'>
            <Layout className='bg-none'>
                <div className='relative'>
                    <HeaderComponent />
                </div>
                <Content>
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default LayoutComponent