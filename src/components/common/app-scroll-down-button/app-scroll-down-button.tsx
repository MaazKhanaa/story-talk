import React from 'react';

// ================== Assets ==================
import APP_ASSETS from '../../../assets';


// ================== Styles ==================
import "./app-scroll-down-button.scss";



const AppScrollDownBtn = () => {
    return (
        <div className='app-scroll-down-btn-wrapper'>
            <p className=''>scroll down</p>
            <img src={APP_ASSETS.arrowDownIcon} alt="arrow-down" />
        </div>
    )
}

export default AppScrollDownBtn