
// ================== Components ==================
import AppHeading from '../../common/app-heading/app-heading';


// ================== Assets ==================
import APP_ASSETS from '../../../assets';



// ================== Style ==================
import './banner.scss';


const BannerComponent = () => {
    return (
        <div className='banner-wrapper' style={{ backgroundImage: `url(${APP_ASSETS.pricingBannerBgImg})` }}>

            <div className='banner-overlay'>
                <div className='banner-content'>
                    <AppHeading text="Pricing" />
                </div>
            </div>

        </div>


    )
}

export default BannerComponent