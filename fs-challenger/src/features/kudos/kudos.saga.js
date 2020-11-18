import { call, put, takeLatest } from 'redux-saga/effects';
import { postStart, postDone } from './kudos.actions'
import { fetch } from './../characters/characters.actions';
import { fetchUser } from './../user/user.actions';
import constants from './../../utils/constants';
import { charactersData, user } from '../../data/data';
import { KudosTypes } from './kudo';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function postKudoApi(payload) {

    switch (payload.kudoType) {
        case KudosTypes.awesome:
            --user.remainingKudos.awesome;
            break;

        case KudosTypes.grateful:
            --user.remainingKudos.grateful;
            break;

        case KudosTypes.learned:
            --user.remainingKudos.learn;
            break;

        default:
            return;
    }

    charactersData.forEach(x => {
        if (x.id === payload.id) {
            x.kudos.push(payload.kudoType)
        }
    });
}

function* postKudo(action) {
    yield put(postStart());

    try {
        yield delay(1000);

        yield call(postKudoApi, action.payload);

        yield put(postDone());

        yield put(fetch());

        yield put(fetchUser());
    }
    catch (e) {
        throw e;
    }
}

export function* kudosSaga() {
    yield takeLatest(constants.kudos.post, postKudo);
}