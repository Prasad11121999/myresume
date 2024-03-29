import React from "react";
import Resume from "./Resume";
import './Dashboard.css';

const Dashboard=({profileId})=>{
    
    return(
        <>
            <nav></nav>
            <main>
                <Resume
                id={profileId}
                />
            </main>
            <footer></footer>
        </>
    );
};

export default Dashboard;