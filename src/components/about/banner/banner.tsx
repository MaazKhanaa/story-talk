import React from 'react';

// ================== Components ==================
import AppHeading from '../../common/app-heading/app-heading';
import AppScrollDownBtn from '../../common/app-scroll-down-button/app-scroll-down-button';



// ================== Assets ==================
import APP_ASSETS from '../../../assets';



// ================== Style ==================
import './banner.scss';


const BannerComponent = () => {
    return (
        <div className='banner-wrapper'>
            {/* <h2>Banner</h2> */}
            <div className='banner-shadow-main'>
                <div className='banner-shadow'></div>
                <img src={APP_ASSETS.aboutBannerBgImg} alt="banner" width="100%" className='banner-img' />
            </div>
            <div className='banner-content'>
                <AppHeading text="About" />
            </div>
            <AppScrollDownBtn />

        </div>
    )
}

export default BannerComponent