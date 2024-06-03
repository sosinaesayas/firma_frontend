import success from '../../assets/animations/success.gif';
import React from "react";
interface SuccessScreenProps {
    message: string;
}
const SuccessScreen : React.FC<SuccessScreenProps> =  ({message }) =>{
    return (
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-red">
            <img className="img w-50 h-50 shadow-lg" src={success} alt="success" />
            <p>{message}</p>
        </div>
    );
}


export default SuccessScreen;