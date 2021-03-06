import React from 'react';

import { Launch as LaunchInterface } from '@/_types';

import defaultImage from '@/_images/default-image.png';

type RocketDataKeys = "Launch Year" | "Successful Launch" | "Successful Landing";

type RocketData = {
    [key in RocketDataKeys]?: string;
}

export function Launch({launchData}: {launchData: LaunchInterface}) {
    const title = `${launchData.mission_name} # ${launchData.flight_number}`;
    const rocketImg = !launchData.links.mission_patch_small ? <img src={defaultImage} alt={launchData.rocket.rocket_name} /> : <img src={launchData.links.mission_patch_small} alt={launchData.rocket.rocket_name} />;
    const rocketData: RocketData = {
        "Launch Year": launchData.launch_year,
        "Successful Launch": JSON.stringify(launchData.launch_success),
    }

    const cores = launchData.rocket.first_stage.cores;
    if(cores && cores[0] && cores[0].land_success !== null && cores[0].land_success !== undefined)
        rocketData["Successful Landing"] = JSON.stringify(cores[0].land_success);
    
    return (
        <>
            <li key={0}>{rocketImg}</li>
            <li key={1}><ul><li><b>{title}</b></li></ul></li>
            <li key={2}>
                <ul>
                    <li key={0}><b>Mission Ids: </b></li>
                    {launchData.mission_id.length > 0 ? launchData.mission_id.map((id, index) => <li key={index + 1} className="p-l-sm">&bull;&nbsp;{id}</li>) : <li key={1}>Not Available</li>}
                </ul>
            </li>
            {
                Object.keys(rocketData).map((key: RocketDataKeys, index) => (
                    <li key={index + 3}>
                        <ul className="details">
                            <li key={0}><b>{key}:&nbsp;</b></li>
                            <li key={1}>{rocketData[key]}</li>
                        </ul>
                    </li>
                ))
            }
        </>
    )
}