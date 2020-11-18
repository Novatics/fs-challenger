import charactersReducer from './features/characters/characters.reducer';
import userReducer from './features/user/user.reducer';
import kudosReducer from './features/kudos/kudos.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
    characters: charactersReducer,
    kudos: kudosReducer
});

export default rootReducer;
