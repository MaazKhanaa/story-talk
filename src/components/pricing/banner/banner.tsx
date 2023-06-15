
// ================== Components ==================
import AppHeading from '../../common/app-heading/app-heading';


// ================== Assets ==================
import APP_ASSETS from '../../../assets';



// ================== Style ==================
import './banner.scss';


const BannerComponent = () => {
    return (
        <div className='banner-wrapper'>
            {/* <h2>Banner</h2> */}
            <img src={APP_ASSETS.pricingBannerBgImg} alt="banner" width="100%" className='banner-img' />

            <div className='banner-content'>
                <AppHeading text="Pricing" />
            </div>

        </div>
    )
}

export default BannerComponent