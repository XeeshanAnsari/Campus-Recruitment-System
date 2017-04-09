

const InitalState = {
     studentsData:{},
     singleStudentData:{},
     isError:false,
     error:''
  
};


function StudentReducer(state = InitalState , action){
    switch(action.type){
        
        case "STUDENT_REGISTER":
           return Object.assign({} , state ,{ isError:false})
        case "STUDENT_REGISTER_WITH_SUCCESSFULL":
           return Object.assign({} , state , { studentsData: action.data , isError:false})
        case "STUDENT_REGISTER_WITH_REJECTED":
           return Object.assign({}, state , {error: action.error  , isError: true})
        


        case "GET_ALL_STUDENTS":
           return Object.assign({}, state ,{isError: false})
        case 'GET_ALL_STUDENTS_WITH_SUCCESSFULL':
           return Object.assign({}, state ,{studentsData:action.data ,isError:false})
        case 'GET_ALL_STUDENTS_WITH_REJECTED':
           return Object.assign({}, state ,{error:action.error ,isError:true})
           
          
        default:
           return state
    }
}

export default StudentReducer