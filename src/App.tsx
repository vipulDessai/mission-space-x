import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';

import './App.scss';
import loaderImage from '@/_images/loader.png';

import { Launch } from '@/_components';
import { Launch as LaunchInterface } from '@/_types';

export function App(props: any) {
    const [year, setYear] = useState(null);
    const [successfulLaunch, setSuccessfulLaunch] = useState(null);
    const [successfulLanding, setSuccessfulLanding] = useState(null);
    const [loader, setLoader] = useState(false);

    const [launches, setLaunches]: [launches: Array<LaunchInterface>, setLaunches: React.SetStateAction<any>] = useState([]);

    const navigateForResult = (type: string, value: number | boolean) => {
        const queryParams = readUrl();
        let queryParamsYear = queryParams.year ? `year=${queryParams.year}&` : '';
        let queryParamsLaunch = queryParams.launch ? `launch=${queryParams.launch}&` : '';
        let queryParamsLand = queryParams.land ? `land=${queryParams.land}&` : '';
        switch (type) {
            case "year":
                if(value === year) {
                    queryParamsYear = '';
                    setYear(null);
                }
                else {
                    queryParamsYear = `year=${JSON.stringify(value)}&`;
                    typeof value === "number" && setYear(value);
                }
                
                break;
            case "success-launch":
                if(value === successfulLaunch) {
                    queryParamsLaunch = '';
                    setSuccessfulLaunch(null);
                }
                else {
                    queryParamsLaunch = `launch=${JSON.stringify(value)}&`;
                    typeof value === "boolean" && setSuccessfulLaunch(value);
                }
                break;
            case "success-land":
                if(value === successfulLanding) {
                    queryParamsLand = '';
                    setSuccessfulLanding(null);
                }
                else {
                    queryParamsLand = `land=${JSON.stringify(value)}&`;
                    typeof value === "boolean" && setSuccessfulLanding(value);
                }
                break;
        
            default:
                break;
        }

        props.history.replace(`/?${queryParamsYear}${queryParamsLaunch}${queryParamsLand}`);
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
        const yearQueryparam = year != null ? `&launch_year=${year}` : '';
        return await axios.get(`https://api.spacexdata.com/v3/launches?limit=100${yearQueryparam}${successfulLaunchQueryParam}${successfulLandQueryParam}`);
    }

    const isInitialMount = useRef(true);

    // on applying new filters
    useEffect(() => {
        let mounted = true;

        if (isInitialMount.current) {
            triggerGetSpaceXMissionData(mounted);
            isInitialMount.current = false;
        }
        else {
            triggerGetSpaceXMissionData(mounted);
        }

        // on unmount set mounted false
        return () => mounted = false;
    }, [year, successfulLaunch, successfulLanding]);

    // on page refresh
    useEffect(() => {
        getDataOnPageRefresh()
    }, []);

    const triggerGetSpaceXMissionData = (mounted: boolean) => {
        if(mounted)
            setLoader(true);
        
        getSpaceXMissionData()
            .then(
                res => {
                    if(mounted) {
                        setLoader(false);
                        setLaunches(res.data);
                    }
                }
            )
            .catch(
                err => {
                    if(mounted) {
                        console.log(err);
                        setLaunches([]);
                    }
                }
            );
    }

    let key = 0;

    return (
        <div className="app-component">
            <h1>SpaceX Launch Programs</h1>
            <ul className="content flex">
                <li key={key} className="filters">
                    <h2>Filters</h2>
                    <ul>
                        <li key={key++}>
                            <ul>
                                <li key={key++} className="text-center underline" data-testid="launch-year">Launch Year</li>
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
                                <li key={key++} className="text-center underline" data-testid="success-launch">Successful Launch</li>
                                <li key={key++}>
                                    <ul className="success-launch-button-group flex justify-content">
                                        <li key={key++}><button data-testid="success-launch-true" className={successfulLaunch === true ? 'active' : ''} onClick={() => navigateForResult("success-launch", true)}>True</button></li>
                                        <li key={key++}><button data-testid="success-launch-false" className={successfulLaunch === false ? 'active' : ''} onClick={() => navigateForResult("success-launch", false)}>False</button></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li key={key++}>
                            <ul>
                                <li key={key++} className="text-center underline" data-testid="success-land">Successful Landing</li>
                                <li key={key++}>
                                    <ul className="success-landing-button-group flex justify-content">
                                        <li key={key++}><button data-testid="success-land-true" className={successfulLanding === true ? 'active' : ''} onClick={() => navigateForResult("success-land", true)}>True</button></li>
                                        <li key={key++}><button data-testid="success-land-false" className={successfulLanding === false ? 'active' : ''} onClick={() => navigateForResult("success-land", false)}>False</button></li>
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
            {   
                loader && 
                    <div className="loader">
                        <img src={loaderImage} alt="loader" />
                    </div>
            }
            <p className="text-center"><b>Developed by:</b> Vipul Dessai</p>
        </div>
    );
}