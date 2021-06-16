import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import Spaces from '../Spaces/Spaces'
import "./Home.css"
const Home = () => {
    const [lanunchYear, setLaunchYear] = useState(0)
    const [isYearClick, setIsYearClick] = useState(false)
    const [isLaunchSuccess, setIsLaunchSuccess] = useState(false)
    const [isLandSuccess, setIsLandSuccess] = useState(false)
    console.log(lanunchYear)
    return (
        <div>
            <h2 style={{ marginLeft: '20px' }}>Space-X Launch Programme</h2>
            <div className='mainDiv'>
                <div className="">
                    <Sidebar setLaunchYear={setLaunchYear} setIsLandSuccess={setIsLandSuccess} setIsLaunchSuccess={setIsLaunchSuccess} setIsYearClick={setIsYearClick} />
                </div>
                <div className="">
                    <Spaces lanunchYear={lanunchYear} isYearClick={isYearClick} isLandSuccess={isLandSuccess} isLaunchSuccess={isLaunchSuccess} />
                </div>

            </div>
        </div>
    );
};

export default Home;