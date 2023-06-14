import React from 'react';


// ================== Components ==================
import LayoutComponent from '../layout/layout'
import BannerComponent from './banner/banner'



const HomeComponent = () => {
    return (
        <LayoutComponent>
            <BannerComponent />
        </LayoutComponent>
    )
}

export default HomeComponent