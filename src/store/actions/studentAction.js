import * as firebase from 'firebase'
import {browserHistory} from 'react-router'


// studnet register start
export function newStudentRegister(data){

    return (dispatch) => {
        
        dispatch(studentRegister())
        
        firebase.database().ref('/').child('studentDetails/' + data.uid).set(data)
        
        .then(()=>{
            dispatch(studentRegisterWithSuccessFull(data))
            browserHistory.push('/viewStudentDetails')
            
        })
        .catch((error) =>{
            dispatch(studentRegisterWithRejected(error))
        })

    }

}
 function studentRegister(){
     return {
         type:'STUDENT_REGISTER'
     }
 }
 function studentRegisterWithSuccessFull(data){
    return{
        type:'STUDENT_REGISTER_WITH_SUCCESSFULL',
        data: data
    }
}

function studentRegisterWithRejected(error){
   return{
       type:'STUDENT_REGISTER_WITH_REJECTED',
       error: error
   }
}
// studnet register end

export function getSingleStudentDetails(){
    
    return (dispatch) =>{
        dispatch()
        firebase.database().ref('studentDetails')
    }
}



export function getAllStudents(){
     
    var students = [];
    return (dispatch) =>{
        dispatch(getStudents())
        console.log('asdsafasfas')
        
        firebase.database().ref('/').child('studentDetails').on('value' , (snapshot) =>{
                
                var obj = snapshot.val();
                console.log(obj)
                for(var data in obj){
                    students.push(obj[data])

                }
                dispatch(getAllStudentsWithSuccessFull(students))
        })
        // .then((obj) => {
        //     dispatch(getAllStudentsWithSuccessFull(obj))
        // })
        // .catch((error) =>{
        //     dispatch(getAllStudentsWithRejected(error))
        // })
    }
}
function getStudents(){
    return{
        type:'GET_ALL_STUDENTS',
        
    }
}
 function getAllStudentsWithSuccessFull(students){
    return{
        type:'GET_ALL_STUDENTS_WITH_SUCCESSFULL',
        data: students
    }
}
function getAllStudentsWithRejected(error){
    return{
        type:'GET_ALL_STUDENTS_WITH_REJECTED',
        error: error
    }
}
