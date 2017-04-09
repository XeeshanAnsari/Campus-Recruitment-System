

const INITIAL_STATE = {
    isRegistered:true,
    isAuthenticated: false,
    userAuth:{},
    error:"",
    isError: false
    

};


function AuthReducer(state = INITIAL_STATE , action){
    switch(action.type){
        
        case "SIGN_UP":
           return Object.assign({},state ,{isRegistered: false})
        case "SIGN_UP_WITH_SUCCESSFULL":
            return Object.assign({}, state ,{userAuth:action.user , isRegistered: true })   
        case"SIGN_UP_WITH_REJECTED":
             return Object.assign({}, state, {error: action.error, isRegistered:false  , isError:true})    
       
        case "SIGN_IN":
           return Object.assign({},state ,{ isAuthenticated: true}) 
        case "SIGN_IN_WITH_SUCCESSFULL":
            return Object.assign({},state ,{ isAuthenticated: true , userAuth: action.user})   
        case"SIGN_IN_WITH_REJECTED":
             return Object.assign({},state, { isAuthenticated:false ,error: action.error  , isError:true})     
       
        case "LOG_OUT":
           return Object.assign({},state , { isAuthenticated: true }) 
        case "LOG_OUT_WITH_SUCCESSFULL":
            return Object.assign({},state ,{ isAuthenticated: false})   
        case"LOG_OUT_WITH_REJECTED":
             return Object.assign({},state, { isAuthenticated: true ,error: action.error  , isError:true})    

          
       
          
        default:
           return state
    }
}

export default AuthReducer