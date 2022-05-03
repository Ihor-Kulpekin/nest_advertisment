import {combineReducers} from 'redux';

import advertisiment from './advertisimentReducer.reducer';
import user from "./user.reducer";

export default combineReducers({advertisiment, user});
