

const InitalState = {
     studentDetails:{}

};


function StudentReducer(state = InitalState , action){
    switch(action.type){
        
        case "ADD_STUDENT_DETAILS":
           return (state , { studentDetails: action.value }) 
        case "VIEW_STUDENT_DETAILS":
           return (state , { studentDetails: action.value }) 
          
        default:
           return state
    }
}

export default StudentReducer