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
            <ul className="content flex">
                <li key={key} className="filters">
                    <h2>Filters</h2>
                    <ul>
                        <li key={key++}>
                            <ul>
                                <li key={key++} className="text-center">Launch Year</li>
                                <li key={key++}>
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
                                <li key={key++} className="text-center">Successful Launch</li>
                                <li key={key++}>
                                    <ul>
                                        <li key={key++}><button onClick={() => setSuccessfulLaunch(true)}>True</button></li>
                                        <li key={key++}><button onClick={() => setSuccessfulLaunch(false)}>False</button></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li key={key++}>
                            <ul>
                                <li key={key++} className="text-center">Successful Landing</li>
                                <li key={key++}>
                                    <ul>
                                        <li key={key++}><button onClick={() => setSuccessfulLanding(true)}>True</button></li>
                                        <li key={key++}><button onClick={() => setSuccessfulLanding(false)}>False</button></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li key={key++} className="results flex">
                    {
                        launches && launches.length > 0 && launches.map((launchData, index) => <ul className="missions" key={index}><Launch launchData={launchData} /></ul>)
                    }
                </li>
            </ul>
            <p className="text-center"><b>Developed by:</b> Vipul Dessai</p>
        </>
    );
}