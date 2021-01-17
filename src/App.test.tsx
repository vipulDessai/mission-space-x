import React from 'react';
import { render, screen, within } from '@testing-library/react';
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
