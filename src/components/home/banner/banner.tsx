import React from 'react';


// ================== Components ==================
import AppButton from '../../common/app-button/app-button';
import AppHeading from '../../common/app-heading/app-heading';
import AppParagraph from '../../common/app-paragraph/app-paragraph';


// ================== Assets ==================
import APP_ASSETS from '../../../assets';



// ================== Style ==================
import './banner.scss';
import AppScrollDownBtn from '../../common/app-scroll-down-button/app-scroll-down-button';



const BannerComponent = () => {
    return (
        <div className='banner-wrapper'>
            {/* <h2>Banner</h2> */}
            <img src={APP_ASSETS.homeBannerBgImg} alt="banner" width="100%" className='banner-img' />

            <div className='banner-content'>
                <AppHeading text="Welcome To the story talk" />
                <AppParagraph text="Make your personalized bedtime stories come alive with the help of ai" className="mt-1" />
                <AppButton type="button" name="create story" className="mt-5" />

            </div>


            <AppScrollDownBtn />

        </div>
    )
}

export default BannerComponent