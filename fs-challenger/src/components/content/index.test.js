import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from '.';

describe('Content component test', () => {
    test('should render Content component', () => {
        render(<Content></Content>);
        // screen.debug();    
    })

    test('Render render Content child', () => {
        render(<Content><h1>Success!</h1></Content>);

        expect(screen.getByText('Success!')).toBeInTheDocument();
        // screen.debug();
    })
})