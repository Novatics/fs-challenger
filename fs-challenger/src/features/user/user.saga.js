import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchStart, fetchDone } from './user.actions'
import constants from './../../utils/constants';
import { user } from './../../data/data';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function fetchUserApi() {
    return user;
}

function* fetchUser() {
    yield put(fetchStart());

    try {
        yield delay(1000);
        
        const result = yield call(fetchUserApi);
    
    
        yield put(fetchDone(result));
    }
    catch (e){
        throw (e);
    }
}

export function* userSaga() {
    yield takeEvery(constants.users.fetch, fetchUser);
}