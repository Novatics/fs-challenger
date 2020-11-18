import styled from 'styled-components';

const Overlaydiv = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
    opacity: 0;
    width: 100%;
    height: 100%;
    transition: .5s ease;
    color: white;
`;

export default Overlaydiv;