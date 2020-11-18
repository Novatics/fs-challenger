import constants from './../../utils/constants';

const initialState = {
    isFetching: null,
    lastFetch: null,
    data: [],
};

export default function charactersReducer(state = initialState, action) {
    switch (action.type) {

        case constants.characters.fetchStart:
            return {
                ...initialState,
                isFetching: true,
                data: [],
            }

        case constants.characters.fetchDone:
            return {
                ...initialState,
                isFetching: false,
                data: [...action.payload],
                lastFetch: new Date(1000 * Math.round(Date.now() / 1000))
            }

        default:
            return state;
    }
}