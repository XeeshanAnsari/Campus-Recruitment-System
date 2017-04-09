import { combineReducers } from 'redux'
import AuthReducer from './authReducer'
import StudentReducer from './studentReducer'
import CompanyReducer from './companyReducer'

 const rootReducer =  combineReducers({
        AuthReducer,
        StudentReducer,
        CompanyReducer,
        
       
    })

export default rootReducer    