import React, { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';

import './App.scss'

import { Launch } from '@/_components';
import { Launch as LaunchInterface } from '@/_types';


export function App(props: any) {
    const [year, setYear] = useState(null);
    const [successfulLaunch, setSuccessfulLaunch] = useState(null);
    const [successfulLanding, setSuccessfulLanding] = useState(null);

    const [launches, setLaunches]: [launches: Array<LaunchInterface>, setLaunches: React.SetStateAction<any>] = useState([]);

    const navigateForResult = (type: string, value: number | boolean) => {
        const queryParams = readUrl();
        let year = queryParams.year ? `year=${queryParams.year}&` : '';
        let launch = queryParams.launch ? `launch=${queryParams.launch}&` : '';
        let land = queryParams.land ? `land=${queryParams.land}&` : '';
        switch (type) {
            case "year":
                year = `year=${JSON.stringify(value)}&`;
                typeof value === "number" && setYear(value);
                break;
            case "success-launch":
                launch = `launch=${JSON.stringify(value)}&`;
                typeof value === "boolean" && setSuccessfulLaunch(value);
                break;
            case "success-land":
                land = `land=${JSON.stringify(value)}&`;
                typeof value === "boolean" && setSuccessfulLanding(value);
                break;
        
            default:
                break;
        }

        props.history.replace(`/?${year}${launch}${land}`);
    }

    const getDataOnPageRefresh = () => {
        let { year, land, launch } = readUrl();
        if(year) {
            typeof year === "string" && setYear(parseInt(year));
        }

        if(land) {
            typeof land === "string" && setSuccessfulLanding(JSON.parse(land));
        }

        if(launch) {
            typeof launch === "string" && setSuccessfulLaunch(JSON.parse(launch));
        }
    }

    const readUrl = () => {
        let queryParams = props.location && props.location.search && queryString.parse(props.location.search);

        if(!queryParams)
            queryParams = {};
        
        return queryParams;
    }

    const getSpaceXMissionData = async () => {
        const successfulLaunchQueryParam = successfulLaunch != null ? (successfulLaunch == true || successfulLaunch == false) && `&launch_success=${JSON.stringify(successfulLaunch)}` : '';
        const successfulLandQueryParam = successfulLanding != null ? (successfulLanding == true || successfulLanding == false) && `&land_success=${JSON.stringify(successfulLanding)}` : '';
        return await axios.get(`https://api.spacexdata.com/v3/launches?launch_year=${year}${successfulLaunchQueryParam}${successfulLandQueryParam}`);
    }

    // on applying new filters
    useEffect(() => {
        let mounted = true;
        getSpaceXMissionData()
            .then(
                res => {
                    if(mounted){
                        if(res.status == 200) {
                            setLaunches(res.data);
                        }
                        else {
                            setLaunches([])
                        }
                    }
                }
            )
            .catch(
                console.log
            )

        // on unmount set mounted false
        return () => mounted = false;
    }, [year, successfulLaunch, successfulLanding]);

    // on page refresh
    useEffect(() => {
        getDataOnPageRefresh()
    }, []);

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
                                <li key={key++} className="text-center" data-testid="launch-year">Launch Year</li>
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
                                                                            <button className={year === iteratedYear ? 'active' : ''} onClick={() => navigateForResult("year", iteratedYear)}>{iteratedYear}</button>
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
                                <li key={key++} className="text-center" data-testid="success-launch">Successful Launch</li>
                                <li key={key++}>
                                    <ul className="success-launch-button-group flex justify-content">
                                        <li key={key++}><button className={successfulLaunch === true ? 'active' : ''} onClick={() => navigateForResult("success-launch", true)}>True</button></li>
                                        <li key={key++}><button className={successfulLaunch === false ? 'active' : ''} onClick={() => navigateForResult("success-launch", false)}>False</button></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li key={key++}>
                            <ul>
                                <li key={key++} className="text-center" data-testid="success-land">Successful Landing</li>
                                <li key={key++}>
                                    <ul className="success-landing-button-group flex justify-content">
                                        <li key={key++}><button className={successfulLanding === true ? 'active' : ''} onClick={() => navigateForResult("success-land", true)}>True</button></li>
                                        <li key={key++}><button className={successfulLanding === false ? 'active' : ''} onClick={() => navigateForResult("success-land", false)}>False</button></li>
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