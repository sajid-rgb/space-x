import React from 'react';
import './Space.css'
const Space = ({ space }) => {
    const { mission_name, launch_year, links, mission_id, launch_success, flight_number, rocket } = space

    return (
        <div className="space" >
            <div className="space-card">
                <div className="space-card-img">
                    <img src={links.mission_patch} className="img-fluid" />
                </div>
                <h3 className='space-name'>{mission_name} #{flight_number}</h3>
                <div className="space-info-div">
                    <div>
                        {
                            <div>
                                <h6><span>Mission Ids:</span></h6>
                                <h6>
                                    {
                                        mission_id.map(id => <li style={{ fontSize: '15px' }}>{id}</li>)
                                    }
                                </h6>
                            </div>
                        }

                    </div>
                    <h5><span>Launch Year:</span> {launch_year}</h5>
                    <h5><span>Successfully Launched:</span> {launch_success !== null && launch_success.toString()}</h5>
                    <h5><span>Successfully Landed:</span> {

                        rocket?.first_stage?.cores?.map(land => <h6 style={{ fontSize: '15px' }}>{land.land_success && land.land_success.toString()}</h6>)



                    }</h5>
                </div>
            </div>
        </div>
    );
};

export default Space;