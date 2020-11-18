import constants from './../../utils/constants';

const initialState = {
    data: {
        remainingKudos:{},
        name: '',
        lastName: '',
        image: ''
    },
    lastFetched: null,
    isFetching: null,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {

        case constants.users.fetchStart:
            return {
                ...state,
                isFetching: true
            }

        case constants.users.fetchDone:
            return {
                ...state,
                isFetching: false,
                lastFetched: new Date(1000 * Math.round(Date.now() / 1000)),
                data: { ...action.payload }
            }

        default:
            return state;
    }
}