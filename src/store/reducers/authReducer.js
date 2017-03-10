

const InitalState = {
    isRegistered: false,
    isLogged: false,
    user:{}

};


function AuthReducer(state = InitalState , action){
    switch(action.type){
        case "SIGN_UP":
           return (state ,{ user:action.value ,isRegistered: true})
        case "SIGN_IN":
           return (state ,{ user:action.user , isLogged: true}) 
        case "LOG_OUT":
           return (state , {  isLogged: false}) 
          
        default:
           return state
    }
}

export default AuthReducer