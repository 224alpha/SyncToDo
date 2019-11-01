import { combineReducers } from 'redux'; 
import User from './user';
import Common from './common';

export default combineReducers({
    user : User,
    common : Common  
});