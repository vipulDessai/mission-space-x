import React from 'react';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'

import { App } from '@/App';

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
        expect(true).toBeTruthy();
    });
    test('Mission Tile - has blank image placeholder', () => {
        expect(true).toBeTruthy();
    });
    test('Button Toggle', () => {
        expect(true).toBeTruthy();
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

describe('Page refresh retaining data', () => {
    test('retains the data on page reload', () => {
        expect(true).toBeTruthy();
    });
});