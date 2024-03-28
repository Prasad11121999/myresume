import React from "react";
import './Login.css';
import './Common.css';

const Login=()=>{
    return(
        <div>
            <input type="email" placeholder="User Name" required={true}/>
            <input type="password" placeholder="Password" required={true}/>
            <input type="checkbox"/>
            <button value="Login"/>
        </div>
    );
};

export default Login