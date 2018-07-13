import { combineReducers } from 'redux';
import { reducer as fromReducer } from 'redux-form';
import auth from './auth';


export default combineReducers({
	auth,
	form: fromReducer

});