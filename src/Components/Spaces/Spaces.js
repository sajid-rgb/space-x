import React, { useEffect, useState } from 'react';
import Space from '../Space/Space'
import './Spaces.css'
const SpacesContainer = ({ lanunchYear, isYearClick, isLandSuccess, isLaunchSuccess }) => {
    const [spaces, setSpaces] = useState([])
    useEffect(() => {
        if (isYearClick === true) {
            fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${lanunchYear}`)
                .then(response => response.json())
                .then(dat => setSpaces(dat))

        }
        else if (isLaunchSuccess === true) {
            const url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=false`
            fetch(url)
                .then(response => response.json())
                .then(dat => setSpaces(dat))
        }
       else  if (isLandSuccess === true) {
            const url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=false&land_success=true`
            fetch(url)
                .then(response => response.json())
                .then(dat => setSpaces(dat))
        }
        else {

            fetch("https://api.spacexdata.com/v3/launches?limit=100")
                .then(response => response.json())
                .then(data => setSpaces(data))
        }
    })
    return (
        <div>
            <div className="spaces ">
                {
                    spaces.map(space => <Space space={space} key={space.id} />)
                }
            </div>
        </div>
    );
};

export default SpacesContainer;