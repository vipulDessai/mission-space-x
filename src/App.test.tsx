import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history'

import { App } from '@/App';
import { Launch } from '@/_components';
import { Launch as LaunchInterface } from './_types';

describe('Render', () => {
    test('landing page has Main Heading',  () => {
        render(
            <App />
        );

        expect(
            screen.getByRole('heading', {
                name: /SpaceX Launch Programs/i
            })
        ).toHaveTextContent('SpaceX Launch Programs');

        expect(
            screen.getByRole('heading', {
                name: /filters/i
            })
        ).toHaveTextContent('Filters');

        expect(
            screen.getByTestId('launch-year')
        ).toHaveTextContent('Launch Year');

        expect(
            screen.getByTestId('success-launch')
        ).toHaveTextContent('Successful Launch');

        expect(
            screen.getByTestId('success-land')
        ).toHaveTextContent('Successful Landing');
    });

    test('Filters has buttons', () => {
        render(
            <App />
        );
        
        const yearGroups = [[2006, 2007], [2008, 2009], [2010, 2011], [2012, 2013], [2014, 2015], [2016, 2017], [2018, 2019], [2020]];
        for(const i in yearGroups) {
            for(const j in yearGroups[i])
                expect(screen.getByText(yearGroups[i][j])).toBeInTheDocument();
        }
    });
});

describe('Feature Functionalities', () => {
    test('Mission Tile - has all attributes', () => {
        const launchData: LaunchInterface = {
            mission_id: ['EE86F74', 'CE91D46'],
            flight_number: 1,
            mission_name: 'Falcon 1',
            links: { 
                mission_patch_small: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
            },
            rocket: {
                rocket_name: 'rocket 1',
                first_stage: {
                    cores: [
                        {
                            land_success: true,
                        }
                    ],
                }
            },
            launch_year: "2006",
            launch_success: true,
        }
        render(<Launch launchData={launchData} />);

        expect(screen.getByText(`${launchData.mission_name} # ${launchData.flight_number}`)).toHaveTextContent(`${launchData.mission_name} # ${launchData.flight_number}`);
        expect(screen.getByText(launchData.mission_id[0], { exact: false })).toHaveTextContent(launchData.mission_id[0]);
        expect(screen.getByText(launchData.mission_id[1], { exact: false })).toHaveTextContent(launchData.mission_id[1]);
        expect(screen.getByText(launchData.launch_year)).toHaveTextContent(launchData.launch_year);
    });
    test('Button Toggle', async () => {
        const history = createMemoryHistory()
        render(
            <App history={history} />
        );

        userEvent.click(
            screen.getByRole('button', {
                name: /2014/i
            })
        );
        userEvent.click(screen.getByTestId('success-launch-true'));
        userEvent.click(screen.getByTestId('success-land-true'));

        expect(
            screen.getByRole('button', {
                name: /2014/i
            })
        ).toHaveClass('active');
        expect(screen.getByTestId('success-launch-true')).toHaveClass('active');
        expect(screen.getByTestId('success-land-true')).toHaveClass('active');

        const missionTile = await screen.findAllByText(/mission ids/i);
        expect(missionTile.length).toBe(2);

        userEvent.click(
            screen.getByRole('button', {
                name: /2014/i
            })
        );
        userEvent.click(screen.getByTestId('success-launch-true'));
        userEvent.click(screen.getByTestId('success-land-true'));

        expect(
            screen.getByRole('button', {
                name: /2014/i
            })
        ).not.toHaveClass('active');
        expect(screen.getByTestId('success-launch-true')).not.toHaveClass('active');
        expect(screen.getByTestId('success-land-true')).not.toHaveClass('active');
    });
});

describe('Network Requests', () => {
    test('get all data i.e. 100 items',  async () => {
        render(
            <App />
        );
        
        const missionTile = await screen.findAllByText(/mission ids/i);
        
        expect(missionTile.length).toBe(100);
        expect(missionTile[0]).toBeInTheDocument();
    });

    test('get no data', async () => {
        const history = createMemoryHistory()
        render(
            <App history={history} />
        );

        userEvent.click(
            screen.getByRole('button', {
                name: /2006/i
            })
        );
        userEvent.click(screen.getByTestId('success-launch-true'));
        userEvent.click(screen.getByTestId('success-land-true'));

        const noDataElement = await screen.findByText(/no data found for selected filters/i);
        expect(noDataElement).toBeInTheDocument();
    });

    test('get selected data i.e 2 items', async () => {
        const history = createMemoryHistory()
        render(
            <App history={history} />
        );

        userEvent.click(
            screen.getByRole('button', {
                name: /2014/i
            })
        );
        userEvent.click(screen.getByTestId('success-launch-true'));
        userEvent.click(screen.getByTestId('success-land-true'));

        const missionTile = await screen.findAllByText(/mission ids/i);
        expect(missionTile.length).toBe(2);
    });
});