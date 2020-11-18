import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchStart, fetchDone } from './characters.actions'
import constants from './../../utils/constants';
import { charactersData } from '../../data/data';

function fetchCharactersApi() {
    return charactersData;
}

function* fetchCharacters() {
    yield put(fetchStart());

    try {
        const result = yield call(fetchCharactersApi);

        yield put(fetchDone(result));
    }
    catch (e) {
        throw new Error(e);
    }
}

export function* charactersSaga() {
    yield takeEvery(constants.characters.fetch, fetchCharacters);
}