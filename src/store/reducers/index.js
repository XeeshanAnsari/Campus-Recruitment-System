import { combineReducers } from 'redux'
import AuthReducer from './authReducer'
import StudentReducer from './studentReducer'
import CompanyReducer from './companyReducer'
import   DeleteReducer from  './deleteReducer'

 const rootReducer =  combineReducers({
        AuthReducer,
        StudentReducer,
        CompanyReducer,
        DeleteReducer
        
       
    })

export default rootReducer    