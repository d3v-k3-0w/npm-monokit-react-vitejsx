import { createStore, combineReducers, applyMiddleware } from 'redux';
import { noteReducer } from './reducers/noteReducer.js';
import { filterReducer } from './reducers/filterReducer.js';
import { thunk } from 'redux-thunk';

//++ combineReducers es combinar varios estados en uno solo, xq el createStore solo permite un estado
const reducerCombine = combineReducers({
	notes: noteReducer,
	filter: filterReducer,
});

export const store = createStore(reducerCombine, applyMiddleware(thunk));
