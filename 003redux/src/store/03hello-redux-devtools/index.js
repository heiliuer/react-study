import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";

function user(state = {id: 1, name: 'ÐÕÃû1'}, action) {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            }
        default:
            return state
    }
}


const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(user,
    composeEnhancers(applyMiddleware()))

store.dispatch({
    type: 'SET_NAME',
    name: 'ÐÕÃû2'
})