import React from 'react';
import './App.scss'

import { Launches } from '@/_components';

interface Launch {
    mission_id: string;
    rocket_name: string;
    launchYear: number;
    successfulLaunch: boolean;
    successfulLanding: string;
}

export function App(props:{launches?: Array<Launch>}) {
    return (
        <>
            <h1>SpaceX Launch Programs</h1>
            <ul>
                <li>
                    <h2>Filters</h2>
                </li>
                <li>
                    <ul key={0}>
                        {
                            props.launches && props.launches.map(launchData => <Launches {...launchData} />)
                        }
                    </ul>
                </li>
            </ul>
        </>
    );
}