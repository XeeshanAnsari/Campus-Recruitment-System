import { combineReducers } from 'redux'
import AuthReducer from './authReducer'
import DataReducer from './dataReducer'
import StudentReducer from './studentReducer'
import CompanyReducer from './companyReducer'

 const rootReducer =  combineReducers({
        AuthReducer,
        StudentReducer,
        CompanyReducer,
        DataReducer
       
    })

export default rootReducer    