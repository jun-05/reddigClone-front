import { combineReducers } from 'redux';
import register from './register/reducer';
import login from './login/reducer';

const rootReducer = combineReducers({
    register,
    login
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;