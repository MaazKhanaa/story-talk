import React from 'react';



// ================== Assets ==================
import APP_ASSETS from '../../../assets';



// ================== Style ==================
import './banner.scss';
import AppButton from '../../common/app-button/app-button';
import AppHeading from '../../common/app-heading/app-heading';
import AppParagraph from '../../common/app-paragraph/app-paragraph';


const BannerComponent = () => {
    return (
        <div className='banner-wrapper'>
            {/* <h2>Banner</h2> */}
            <img src={APP_ASSETS.bannerBgImg} alt="banner" width="100%" className='banner-img' />

            <div className='banner-content'>
                <AppHeading text="Welcome To the story talk" />
                <AppParagraph text="Make your personalized bedtime stories come alive with the help of ai" className="mt-1" />
                <AppButton type="button" name="create story" className="mt-5" />
            </div>

        </div>
    )
}

export default BannerComponent