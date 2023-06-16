import React from 'react';


// ================== Components ==================
import BannerComponent from './banner/banner'
import AboutUS from './about-us/aboutUs';
import CreateStory from './create-story/createStory';



const HomeComponent = () => {
    return (
        <>
            <BannerComponent />
            <AboutUS />
            <CreateStory />
        </>
    )
}

export default HomeComponent