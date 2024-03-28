import React from "react";
import './Component.css';

const Button=({text,onClick,isDisabled,isLoading,className})=>{

    return(
        <button className={'DiPraxias-btn DiPraxias-btn-sm DiPraxias-btn-primary'+ className} onClick={onClick} disabled={isLoading?isLoading:isDisabled}>
            {(!isLoading)?text:'Loading...'}
        </button>
    );
};
export default Button;