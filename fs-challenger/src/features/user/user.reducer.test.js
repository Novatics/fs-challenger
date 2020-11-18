import * as actions from './user.actions';
import constants from '../../utils/constants';
import userReducer from './user.reducer';

describe('User reducer test', () => {
    it('should return fetch start action', () => {
        const expectedAction = {
            type: constants.users.fetchStart
        };

        expect(actions.fetchStart()).toEqual(expectedAction);
    })

    it('should return "fetching" state', () => {
        expect(userReducer(undefined, actions.fetchStart())).toEqual({
            data: {
                remainingKudos: {},
                name: '',
                lastName: '',
                image: ''
            },
            lastFetched: null,
            isFetching: true,
        })
    })

    it('should return fetch done action', () => {
        const expectedAction = {
            type: constants.users.fetchDone,
            payload: {}
        }
        expect(actions.fetchDone({})).toEqual(expectedAction);
    })

    it('shold return fetch done state', () => {
        expect(userReducer(undefined, actions.fetchDone({}))).toEqual({
            isFetching: false,
            lastFetched: new Date(1000 * Math.round(Date.now() / 1000)),
            data: {}
        })
    })
});