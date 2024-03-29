import React from "react";
import './Component.css';

const Button=({text,onClick,isDisabled,isLoading,className})=>{

    return(
        <button className={'DiPraxias-btn DiPraxias-btn-sm DiPraxias-btn-primary'+ className} onClick={onClick} disabled={isLoading?isLoading:isDisabled}>
            {(!isLoading)?text:
            <>
                <div className="spinner-border spinner-border-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div><span className="ps-2">Loading...</span>
            </>
            }
        </button>
    );
};
export default Button;