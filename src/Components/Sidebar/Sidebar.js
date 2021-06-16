import React from 'react';
import './Sidebar.css'
const landingYear = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
const Sidebar = ({ setLaunchYear, setIsYearClick, setIsLaunchSuccess, setIsLandSuccess }) => {

    const handleChange = (year) => {
        setIsYearClick(true)
        setLaunchYear(year)
        setIsLaunchSuccess(false)
    }
    return (
        <div style={{ marginTop: "20px" }}>
            <div className='sidebar-main'>
                <h4 className='filters'>Filters</h4>
                <div>
                    <h5 className='' style={{ textAlign: 'center' }}>Launch Year</h5>  <hr style={{ width: "100%", textAlign: 'center', marginLeft: '' }} />

                    <div className="side-bar">
                        {
                            landingYear.map(lYear => <div className="">

                                <button className="" onClick={() => handleChange(lYear)} ><span style={{ opacity: 1 }}>{lYear}</span></button>
                            </div>)
                        }
                    </div>
                    <div className="success-launch">
                        <h6>
                            <span style={{ fontSize: '13px' }}>Successfully Launched </span>
                            <hr style={{ width: "100%", textAlign: 'center', marginLeft: '0px' }} />
                        </h6>
                        <div className="launch-button-div">
                            <button className='' onClick={() => setIsLaunchSuccess(true)}>True</button>
                            <button className='launch-false-button' onClick={() => setIsLaunchSuccess(false)}>False</button>
                        </div>
                    </div>
                    <div className="success-land">
                        <h6>
                            <span style={{ fontSize: '13px' }}>Successfully Landing</span>
                            <hr style={{ width: "100%", textAlign: 'center', marginLeft: '0px' }} />
                        </h6>
                        <div className="land-button-div">
                            <button className='' onClick={() => setIsLandSuccess(true)}>True</button>
                            <button className='land-false-button' onClick={() => setIsLandSuccess(true)}>False</button>
                        </div>
                    </div>
                </div>
            </div >
        </div>

    );
};

export default Sidebar;