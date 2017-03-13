

export function addStudentDetails(data){
    return{
        type:'ADD_STUDENT_DETAILS',
        value: data
    }
}

export function viewStudentDetails(data){
    return{
        type:'VIEW_STUDENT_DETAILS',
        value: data
    }
}