import { all } from 'redux-saga/effects';
import { charactersSaga } from './features/characters/characters.saga';
import { userSaga } from './features/user/user.saga';
import { kudosSaga } from './features/kudos/kudos.saga';

export default function* rootSaga() {
    yield all([
        userSaga(),
        charactersSaga(),
        kudosSaga()
    ])
}