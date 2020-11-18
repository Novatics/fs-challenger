import React from 'react';
import { Kudo } from './kudo';
import styled from 'styled-components';
import { KudosTypes } from './../../features/kudos/kudo';

const KudosWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 1rem;

    & > * {
        margin: 0 1rem;
    }
`;

const Learned = ({ click, badge }) =>
    <Kudo
        backgroundColor='#00AFF0'
        badge={badge}
        content='👨‍🎓'
        click={click ? () => click(KudosTypes.learned) : null}
    />;

const Awesome = ({ click, badge }) =>
    <Kudo
        backgroundColor='#FFF200'
        badge={badge}
        content='👏'
        click={click ? () => click(KudosTypes.awesome) : null}
    />;

const Grateful = ({ click, badge }) =>
    <Kudo
        backgroundColor='#EC1D8C'
        badge={badge}
        content='🙏🏻'
        click={click ? () => click(KudosTypes.grateful) : null}
    />;

export { Learned, Awesome, Grateful, KudosWrapper };