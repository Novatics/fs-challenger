import * as actions from './characters.actions';
import constants from '../../utils/constants';
import charactersReducer from './characters.reducer';

describe('Characters reducer test', () => {
    it('should return fetch start action', () => {
        const expectedAction = {
            type: constants.characters.fetchStart
        };

        expect(actions.fetchStart()).toEqual(expectedAction);
    })

    it('should return "fetching" state', () => {
        expect(charactersReducer(undefined, actions.fetchStart())).toEqual({
            isFetching: true,
            lastFetch: null,
            data: [],

        })
    })

    it('should return fetch done action', () => {
        const expectedAction = {
            type: constants.characters.fetchDone,
            payload: []
        };

        expect(actions.fetchDone([])).toEqual(expectedAction);
    })

    it('should return fetch done state', () => {
        expect(charactersReducer(undefined, actions.fetchDone([]))).toEqual({
            isFetching: false,
            lastFetch: new Date(1000 * Math.round(Date.now() / 1000)),
            data: [],
        })
    })
});