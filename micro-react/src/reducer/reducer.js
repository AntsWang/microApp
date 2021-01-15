import {combineReducers} from 'redux'

const userInfo = (state = {}, action) => {
    switch (action.type) {
        case 'count':
            console.log(state, action);
            return Object.assign({},state,action.payload);
        default:
            return state;

    }
}


const comReducer = combineReducers({
    userInfo
});

export default comReducer;