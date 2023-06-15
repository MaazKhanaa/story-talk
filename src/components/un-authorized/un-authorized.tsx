import { useNavigate } from 'react-router-dom';


// ========================== UTILS ==========================
import { renderDashboard } from '../../utils/utils';



const UnAuthorizedComponent = () => {

    const navigate = useNavigate();
    const { role }: any = JSON.parse(localStorage.getItem("careUserData") || "{}");

    const handleGoBack = () => {
        navigate(-1);
    };


    const handleGoToDashboard = () => {
        const navigateRole = renderDashboard(role);
        navigate(navigateRole)
    }

    return (
        <div className="unathorized-main">
            <div className="page-content d-flex align-center justify-center flex-column">
                <h2 className="title-color fs-26 m-0 text-center">
                    You are not authorized to view this page.
                </h2>
                <button className='link-button' onClick={handleGoBack}>Go back</button>
                <button className='link-button' onClick={handleGoToDashboard}>Go home</button>
            </div>
        </div>
    );
}

export default UnAuthorizedComponent;

