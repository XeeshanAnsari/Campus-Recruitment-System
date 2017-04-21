import * as firebase from 'firebase'
import {browserHistory} from 'react-router'

 export  function deleteStudentWithFirebase(id){
    return (dispatch) =>{
        
        dispatch(deleteStudent())
        firebase.database().ref('studentDetails').child(id).remove()
       
        .then(() => {
             dispatch(deleteStudentWithSuccessFull())
             browserHistory.push('/viewAllStudents')
        })
        .catch((error) => {
            dispatch(deleteStudentWithRejected(error))
        })


    }
}
function deleteStudent(){
    return{
        type:"DELETE_STUDENT"
    }
}


function deleteStudentWithSuccessFull(){
    return{
        type:"DELETE_STUDENT_WILH_SUCCESSFULL",
       
    }
}
function deleteStudentWithRejected(error){
    return{
        type:"DELETE_STUDENT_WILH_REJECTED",
        error: error
    }
}

 export  function deleteJobWithFirebase(id){
    return (dispatch) =>{
        
        dispatch(deleteJob())
        firebase.database().ref('jobs').child(id).remove()
       
        .then(() => {
             dispatch(deleteJobWithSuccessFull())
             browserHistory.push('/viewAllJos')
        })
        .catch((error) => {
            dispatch(deleteJobWithRejected(error))
        })


    }
}
function deleteJob(){
    return{
        type:"DELETE_JOB"
    }
}


function deleteJobWithSuccessFull(){
    return{
        type:"DELETE_JOB_WILH_SUCCESSFULL",
       
    }
}
function deleteJobWithRejected(error){
    return{
        type:"DELETE_JOB_WILH_REJECTED",
        error: error
    }
}