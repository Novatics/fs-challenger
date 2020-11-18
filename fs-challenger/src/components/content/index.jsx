import React from 'react';
import styled from 'styled-components';

const Host = styled.div`
    padding: 0 10rem;
    top: 50px;
    position: fixed;
    overflow: auto;
    height: calc(100% - 50px);
`;

function Content(props) {
    return (
        <Host>
            {props.children}
        </Host>
    );
}

export default Content;