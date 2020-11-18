import constants from './../../utils/constants';

export function post({ id, kudoType }) {
    return {
        type: constants.kudos.post,
        payload: {
            id,
            kudoType
        }
    }
}

export function postStart() {
    return {
        type: constants.kudos.postStart
    }
}

export function postDone() {
    return {
        type: constants.kudos.postDone
    }
}
