import { createStore, combineReducers } from 'redux'
import AuthReducer from './reducers/authReducer'

export const rootReducer =  combineReducers({
        AuthReducer,
       
    })
    
let store = createStore(rootReducer) ;

export default store