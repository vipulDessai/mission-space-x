import React from 'react';

export function Launches({mission_id, rocket_name, launchYear, successfulLaunch, successfulLanding}: {mission_id: string, rocket_name: string, launchYear: number, successfulLaunch: boolean, successfulLanding: string}) {
    return (
        <li key={mission_id}>
            <ul key={0}>
                {/* <li key={0}>{mission_id}</li> */}
            </ul>
        </li>
    )
}