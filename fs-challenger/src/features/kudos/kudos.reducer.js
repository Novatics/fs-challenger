import constants from './../../utils/constants';

const initialState = {
    isBusy: false
};

export default function kudosReducer(state = initialState, action) {
    switch (action.type) {

        case constants.kudos.postStart:
            return {
                ...state,
                isBusy: true
            }

        case constants.kudos.postDone:
            return {
                ...state,
                isBusy: false
            }

        default:
            return {
                ...state
            }
    }
}