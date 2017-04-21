
const InitalState = {
    isError: false,
    error:""   , 
    deletedStatus: true 

};


function DeleteReducer(state = InitalState , action){
    switch(action.type){
     

       case "DELETE_STUDENT":
          return Object.assign({}, state , {isError: false , deletedStatus:false})
       case "DELETE_STUDENT_WITH_SUCCESSFULL":
          return Object.assign({} , state ,{ deletedStatus: true , isError: false})
        case "DELETE_STUDENT_WITH_REJECTED":
           return Object.assign({}, state, {error: action.error ,  deletedStatus: false,isError: true}) 


       case "DELETE_JOB":
          return Object.assign({}, state , {isError: false , deletedStatus:false})
       case "DELETE_JOB_WITH_SUCCESSFULL":
          return Object.assign({} , state ,{ deletedStatus: true , isError: false})
        case "DELETE_JOB_WITH_REJECTED":
           return Object.assign({}, state, {error: action.error ,  deletedStatus: false,isError: true})    
        
        
        default:
           return state
    }
}

export default DeleteReducer