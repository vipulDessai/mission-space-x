import React from 'react';

export function Launches({mission_id, launchYear, successfulLaunch, successfulLanding}: {mission_id: string, launchYear: number, successfulLaunch: boolean, successfulLanding: string}) {
    return (
        <li key={mission_id}>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </li>
    )
}