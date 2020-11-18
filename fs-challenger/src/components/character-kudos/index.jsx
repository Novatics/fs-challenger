import React from 'react';
import styled from 'styled-components';
import person from '../../assets/images/person.png';
import Overlaydiv from '../overlay';
import { Learned, Awesome, Grateful, KudosWrapper } from '../kudos';
import { KudosTypes } from '../../features/kudos/kudo';

const Overlay = styled(Overlaydiv)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Host = styled.div`
    position: relative;

    &:hover ${Overlay}{
        opacity: .8;
    }
`;


export default class CharacterKudo extends React.Component {

    showKudo = (kudoType) => {
        const {
            character = {}
        } = this.props;

        return character.kudos.indexOf(kudoType) < 0;
    }

    render() {
        const {
            character = {},
            width,
            heigth,
            sendKudo = () => { }
        } = this.props;

        return (
            <Host>
                <img src={character.photo || person} width={width} height={heigth} style={{ objectFit: 'cover' }}></img>
                <Overlay>
                    <small>Dê um kudo para</small>
                    <h3>{character.name}</h3>
                    <KudosWrapper>
                        {
                            this.showKudo(KudosTypes.learned) &&
                            <Learned click={sendKudo} />
                        }
                        {
                            this.showKudo(KudosTypes.awesome) &&
                            <Awesome click={sendKudo} />
                        }
                        {
                            this.showKudo(KudosTypes.grateful) &&
                            <Grateful click={sendKudo} />
                        }
                    </KudosWrapper>
                </Overlay>
            </Host>
        )
    }
}