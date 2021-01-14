import React, { useEffect, useState } from 'react';
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
                                            [[2006, 2007], [2008, 2009], [2010, 2011], [2012, 2013], [2014, 2015], [2016, 2017], [2018, 2019], [2020]]
                                                .map(
                                                    (yearGroup, index) => (
                                                        <li key={index}>
                                                            <ul className="year-group flex justify-content">
                                                            {
                                                                yearGroup.map(
                                                                    (iteratedYear, index) => (
                                                                        <li key={index}>
                                                                            <button className={year === iteratedYear ? 'active' : ''} onClick={() => setYear(iteratedYear)}>{iteratedYear}</button>
                                                                        </li>
                                                                    )
                                                                )
                                                            }
                                                            </ul>
                                                        </li>
                                                    )
                                                )
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li key={key++}>
                            <ul>
                                <li key={key++} className="text-center">Successful Launch</li>
                                <li key={key++}>
                                    <ul className="success-launch-button-group flex justify-content">
                                        <li key={key++}><button className={successfulLaunch === true ? 'active' : ''} onClick={() => setSuccessfulLaunch(true)}>True</button></li>
                                        <li key={key++}><button className={successfulLaunch === false ? 'active' : ''} onClick={() => setSuccessfulLaunch(false)}>False</button></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li key={key++}>
                            <ul>
                                <li key={key++} className="text-center">Successful Landing</li>
                                <li key={key++}>
                                    <ul className="success-landing-button-group flex justify-content">
                                        <li key={key++}><button className={successfulLanding === true ? 'active' : ''} onClick={() => setSuccessfulLanding(true)}>True</button></li>
                                        <li key={key++}><button className={successfulLanding === false ? 'active' : ''} onClick={() => setSuccessfulLanding(false)}>False</button></li>
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
                    {
                        (!launches || launches.length == 0) && <p>No data found for selected filters</p>
                    }
                </li>
            </ul>
            <p className="text-center"><b>Developed by:</b> Vipul Dessai</p>
        </>
    );
}