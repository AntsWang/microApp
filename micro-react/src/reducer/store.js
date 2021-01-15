import { createStore } from 'redux';
import {createActions} from './actions';
import comReducer from './reducer';



const store = createStore(comReducer);

export {createActions};
export default store;