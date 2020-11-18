import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Kudo } from './kudo';

describe('Kudo component test', () => {
    test('should render Kudo component', () => {
        render(<Kudo></Kudo>);
        // screen.debug();
    })

    test('should render Kudo content', () => {
        render(<Kudo backgroundColor="blue" content="Conteúdo"></Kudo>);
        expect(screen.getByText("Conteúdo")).toBeInTheDocument();
        // screen.debug();
    })

    test('should fire click event', () => {
        const click = jest.fn();

        render(<Kudo backgroundColor="blue" content="Conteúdo" click={click} badge={2}></Kudo>);
        fireEvent.click(screen.getByText("Conteúdo"));

        expect(click).toHaveBeenCalledTimes(1);
        // screen.debug();
    })

});