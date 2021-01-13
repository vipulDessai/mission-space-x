import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import axios from 'axios';

import './App.scss'

import { Launch } from '@/_components';
import { Launch as LaunchInterface } from '@/_types';

export function App() {
    const [year, setYear] = useState(2006);
    const [successfulLaunch, setSuccessfulLaunch] = useState(null);
    const [successfulLanding, setSuccessfulLanding] = useState(null);

    const [launches, setLaunches]: [launches: Array<LaunchInterface>, setLaunches: React.SetStateAction<any>] = useState([]);

    const getData = async () => {
        const successfulLaunchQueryParam = successfulLaunch != null ? (successfulLaunch == true || successfulLaunch == false) && `&launch_success=${JSON.stringify(successfulLaunch)}` : '';
        const successfulLandQueryParam = successfulLanding != null ? (successfulLanding == true || successfulLanding == false) && `&land_success=${JSON.stringify(successfulLanding)}` : '';
        const apiResponse = await axios.get(`https://api.spacexdata.com/v3/launches?launch_year=${year}${successfulLaunchQueryParam}${successfulLandQueryParam}`);
        if(apiResponse.status == 200) {
            setLaunches(apiResponse.data);
        }
        else {
            setLaunches([])
        }
    }

    // componentDidMount
    useEffect(() => {
        getData()
    }, [year, successfulLaunch, successfulLanding]);

    let key = 0;

    return (
        <>
            <h1>SpaceX Launch Programs</h1>
            <ul>
                <li key={key}>
                    <h2>Filters</h2>
                    <ul>
                        <li key={key++}>
                            <ul>
                                <li key={0}>Launch Year</li>
                                <li key={1}>
                                    <ul>
                                        {
                                            _.range(2006, 2021).map((year, index) => <li key={index}><button onClick={() => setYear(year)}>{year}</button></li>)
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li key={key++}>
                            <ul>
                                <li key={0}>Successful Launch</li>
                                <li key={1}>
                                    <ul>
                                        <li key={0}><button onClick={() => setSuccessfulLaunch(true)}>True</button></li>
                                        <li key={1}><button onClick={() => setSuccessfulLaunch(false)}>False</button></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li key={key++}>
                            <ul>
                                <li key={0}>Successful Landing</li>
                                <li key={1}>
                                    <ul>
                                        <li key={0}><button onClick={() => setSuccessfulLanding(true)}>True</button></li>
                                        <li key={1}><button onClick={() => setSuccessfulLanding(false)}>False</button></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li key={key++}>
                    <ul>
                        {
                            launches && launches.length > 0 && launches.map((launchData, index) => <li key={index}><Launch launchData={launchData} /></li>)
                        }
                    </ul>
                </li>
            </ul>
            <p>Developed by Vipul Dessai</p>
        </>
    );
}