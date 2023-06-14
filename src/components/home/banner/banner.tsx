import React from 'react';



// ================== Assets ==================
import APP_ASSETS from '../../../assets';



// ================== Style ==================
import './banner.scss';


const BannerComponent = () => {
    return (
        <div className='banner-wrapper'>
            {/* <h2>Banner</h2> */}
            <img src={APP_ASSETS.bannerBgImg} alt="banner" width="100%" className='banner-img' />

        </div>
    )
}

export default BannerComponent