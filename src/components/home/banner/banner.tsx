import React from 'react';


// ================== Components ==================
import AppButton from '../../common/app-button/app-button';
import AppHeading from '../../common/app-heading/app-heading';
import AppParagraph from '../../common/app-paragraph/app-paragraph';
import AppScrollDownBtn from '../../common/app-scroll-down-button/app-scroll-down-button';


// ================== Assets ==================
import APP_ASSETS from '../../../assets';



// ================== Style ==================
import './banner.scss';



const BannerComponent = () => {
    return (
        <div className='banner-wrapper' style={{ backgroundImage: `url(${APP_ASSETS.homeBannerBgImg})` }}>
            <div className='banner-overlay'>
                <div className='banner-content'>
                    <AppHeading text="Welcome To the story talk" />
                    <AppParagraph text="Make your personalized bedtime stories come alive with the help of ai" className="mt-1" />
                    <AppButton type="button" name="create story" className="mt-5" />
                </div>
            </div>

            <AppScrollDownBtn />

        </div>
    )
}

export default BannerComponent