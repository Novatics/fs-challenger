import constants from './../../utils/constants';

export function fetch() {
    return {
        type: constants.characters.fetch
    }
}

export function fetchStart() {
    return {
        type: constants.characters.fetchStart
    }
}

export function fetchDone(payload = []) {
    return {
        type: constants.characters.fetchDone,
        payload
    }
}