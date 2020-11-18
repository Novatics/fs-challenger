import React from 'react';
import styled, { css } from 'styled-components';

const Host = styled.div`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${props => props.backgroundColor || 'black'};
    font-size: 1.5rem;
    cursor: ${props => props.clickable ? 'pointer' : 'default'};
    position: relative;

    ${props => props.badge && css`
        &::after {
            content:"${props => props.badge}";
            position: absolute;
            background: black;
            opacity: .7;
            height:1rem;
            width:1rem;
            top: 3em;
            text-align: center;
            line-height: 1rem;;
            font-size: small;
            border-radius: 50%;
            color:white;
        }
    `}
`;

export const Kudo = ({ backgroundColor, content, click, badge }) => {
    let clickable = false;

    if (click && typeof (click) === 'function') {
        clickable = true;
    }
    else {
        click = () => { };
    }

    return (
        <Host backgroundColor={backgroundColor} clickable={clickable} onClick={click} badge={badge}>
            <span>{content}</span>
        </Host>
    )
};