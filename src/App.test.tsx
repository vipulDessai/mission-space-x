import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '@/App';

test('renders landing page', () => {
    render(
        <App />
    );

    expect(
        screen.getByRole('heading', {
            name: /SpaceX Launch Programs/i
        })
    ).toHaveTextContent('SpaceX Launch Programs');
});