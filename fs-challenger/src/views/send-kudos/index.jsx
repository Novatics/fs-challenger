import React from 'react';
import styled from 'styled-components';
import { Learned, Awesome, Grateful, KudosWrapper } from '../../components/kudos';
import CharacterKudo from '../../components/character-kudos';
import { connect } from 'react-redux';
import { fetch } from '../../features/characters/characters.actions';
import { post } from '../../features/kudos/kudos.actions';
import { KudosTypes } from './../../features/kudos/kudo';

const Host = styled.div`
    & > * {
        padding: 1vw;
    }
`;

const AvaliableKudos = styled.div`
    display: inline-grid;
    border: 1px solid #ccc;
    border-radius: 4px;
    grid-template-rows 1.5rem 1fr;
    margin-left: 1vw;
`;

const CharactersHost = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const H6 = styled.h6`
    margin: unset;
`;

const LastUpdate = styled.span`
    text-align: end;
    font-size: .6rem;
    color: #bbb;
    padding-top: 1rem;
`;

class GiveKudos extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetch());
    }

    hasRemaining = (kudoType) => {

        const {
            user: {
                data: user
            },
        } = this.props;

        switch (kudoType) {
            case KudosTypes.learned:
                return user.remainingKudos.learn > 0;

            case KudosTypes.awesome:
                return user.remainingKudos.awesome > 0;

            case KudosTypes.grateful:
                return user.remainingKudos.grateful > 0;

            default:
                return false;
        }
    }

    sendKudo = (characterId, kudoType) => {

        const { dispatch } = this.props;

        if (!this.hasRemaining(kudoType)) {
            return;
        }

        dispatch(post({
            id: characterId,
            kudoType
        }));
    }

    render() {
        const {
            user: {
                data: user
            },
            characters: {
                lastFetch = '',
                data = []
            }
        } = this.props;

        return (
            <Host>
                <h1>Dê um kudo!</h1>
                <AvaliableKudos>
                    <H6>Selos disponíveis</H6>
                    <KudosWrapper>
                        <Learned badge={user.remainingKudos.learn} />
                        <Awesome badge={user.remainingKudos.awesome} />
                        <Grateful badge={user.remainingKudos.grateful} />
                    </KudosWrapper>
                    <LastUpdate>Atualizado em: {lastFetch ? lastFetch.toLocaleString() : ''}</LastUpdate>
                </AvaliableKudos>
                <CharactersHost>
                    {
                        data.map(character =>
                            <CharacterKudo
                                key={character.id}
                                character={character}
                                width={250}
                                heigth={250}
                                sendKudo={(kudo) => this.sendKudo(character.id, kudo)}
                            />
                        )
                    }
                </CharactersHost>
            </Host>
        );
    }
}

export default connect(state => ({ characters: state.characters, user: state.user }))(GiveKudos);