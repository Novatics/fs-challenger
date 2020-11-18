import constants from './../../utils/constants';

export function fetchUser() {
    return {
        type: constants.users.fetch
    }
}

export function fetchStart() {
    return {
        type: constants.users.fetchStart
    }
}

export function fetchDone(payload = {}) {
    return {
        type: constants.users.fetchDone,
        payload
    }
}