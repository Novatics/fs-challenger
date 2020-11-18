import * as actions from './kudos.actions';
import constants from '../../utils/constants';
import kudosReducer from './kudos.reducer';

describe('Kudos reducer test', () => {
    it('should return post start action', () => {
        const expectedAction = {
            type: constants.kudos.postStart
        }
        expect(actions.postStart()).toEqual(expectedAction);
    })

    it('should return "busy" state', () => {
        expect(kudosReducer(undefined, actions.postStart())).toEqual({
            isBusy: true
        })
    })

    it('should return post done action', () => {
        const expectedAction = {
            type: constants.kudos.postDone
        }
        expect(actions.postDone()).toEqual(expectedAction);
    })

    it('should return "busy" state false', () => {
        expect(kudosReducer(undefined, actions.postDone())).toEqual({
            isBusy: false
        })
    })
});