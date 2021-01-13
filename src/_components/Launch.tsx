import React from 'react';

import { Launch as LaunchInterface } from '@/_types';

export function Launch({launchData}: {launchData: LaunchInterface}) {
    const rocketName = launchData.rocket.rocket_name;
    const rocketImg = <img src={launchData.links.mission_patch_small} alt={launchData.rocket.rocket_name} />;
    const rocketData: any = {
        mission_id: launchData.mission_id.join(),
        launch_year: launchData.launch_year,
        launch_success: JSON.stringify(launchData.launch_success),
        land_success: launchData.rocket.first_stage.cores[0].land_success != null ? JSON.stringify(launchData.rocket.first_stage.cores[0].land_success) : undefined,
    }
    return (
        <ul>
            <li key={0}>{rocketImg}</li>
            <li key={1}>{rocketName}</li>
            {
                Object.keys(rocketData).map((key, index) => (
                    <li key={index + 2}>
                        <ul>
                            <li key={0}>{key}: </li>
                            <li key={1}>{rocketData[key]}</li>
                        </ul>
                    </li>
                ))
            }
        </ul>
    )
}