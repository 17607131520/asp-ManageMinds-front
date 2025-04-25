import { combineReducers } from 'redux';
import userReducer from './userReducer/reducer';

const rootReducer = combineReducers({
  userinfo: userReducer,
});

const whitelist = ['userinfo'];

export { rootReducer, whitelist };

export type RootState = ReturnType<typeof rootReducer>;
