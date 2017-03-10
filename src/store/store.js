import { createStore, combineReducers , applyMiddleware } from 'redux'
import AuthReducer from './reducers/authReducer'
import thunk from 'redux-thunk';
import  createLogger from 'redux-logger';

export const rootReducer =  combineReducers({
        AuthReducer,
       
    })
    
const logger  = createLogger();

const store = createStore(rootReducer,
    {},
    applyMiddleware(thunk, logger)
);

export default store