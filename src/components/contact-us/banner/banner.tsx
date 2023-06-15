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
        <div className='banner-wrapper' style={{ backgroundImage: `url(${APP_ASSETS.contactBannerBgImg})` }}>
            <div className='banner-overlay'>
                <div className='banner-content'>
                    <AppHeading text="Contact us" />
                </div>
            </div>
            <AppScrollDownBtn />
        </div>
    )
}

export default BannerComponent