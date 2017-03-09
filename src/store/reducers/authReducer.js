

const InitalState = {
    isRegistered: false,
    isLoged: false,
    user:{}

};


function AuthReducer(state = InitalState , action){
    switch(action.type){
        case "SIGN_UP":
           return Object.assign({}, state ,{ user:action.value ,isRegistered: true})
        case "SIGN_IN":
           return Object.assign({}, state ,{ user:action.user ,isLoged: true})
        default:
           return state
    }
}

export default AuthReducer