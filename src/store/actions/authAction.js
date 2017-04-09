import * as firebase from 'firebase'
import {browserHistory} from 'react-router'
// signup section open
  

  

export  function signUpWithAuth(userInfo){
    
        return (dispatch) => {

            console.log("dada");
            dispatch(signUp());
            
            firebase.auth().createUserWithEmailAndPassword(userInfo.email,userInfo.pass)// authentecation
            .then((newUser) =>{
                userInfo.uid = newUser.uid
                console.log(userInfo)
                firebase.database().ref('/').child(`users/${userInfo.uid}`).set(userInfo)//save data in database
                .then(()=>{
                    dispatch(signUpWithSuccessFull(userInfo));
                    browserHistory.push('/login')
                    
                })
            })
            .catch((error)=>{
                 dispatch(signUpWithRejected(error));
            })
        }     
    
 
  } 
   function signUp() {
        return {
            type: 'SIGN_UP'
        }
    }
   
  function  signUpWithSuccessFull(user) {
        return {
            type: 'SIGN_UP_WITH_SUCCESSFULL',
            user:user
        }
    }
   function  signUpWithRejected(error) {
        return {
            type: 'SIGN_UP_WITH_REJECTED',
            error: error
        }
    }

// signup section close


// SIGN_IN section open
export function signInWithAuth(userInfo){
       return (dispatch) =>{
           dispatch(signIn());
           firebase.auth().signInWithEmailAndPassword(userInfo.email,userInfo.pass)
           .then((user) =>{
               let uid = user.uid
               localStorage.setItem('currentUser' , uid)
               firebase.database().ref('users/').child(uid).once('value', (snapshot) =>{
                    dispatch(signInWithSuccessFull(snapshot.val()))
                    browserHistory.push('/')
               })
           })
           .catch((error) =>{
               dispatch(signInWithRejected(error))
           })
       }
}
   function signIn() {
        return {
            type: 'SIGN_IN',
        }
    }

    function signInWithSuccessFull(user){
        return {
            type:'SIGN_IN_WITH_SUCCESSFULL',
            user: user
        }
    }
    
    function signInWithRejected(error){
        return {
            type:'SIGN_IN_WITH_REJECTED',
            error: error

        }
    }


// signOut section open
export function logOutWithAuth(){
    return (dispatch) =>{
        dispatch(logOut())
        firebase.auth().signOut()
        .then(() => {
            dispatch(logOutWithSuccessFull())
            browserHistory.push('/login')
        })
        .catch((error) => {
            dispatch(logOutWithRejected(error))
        })
    }
}

    function logOut(){
        return {
            type:'LOG_OUT'
        }
    }
    function logOutWithSuccessFull(){
        return {
            type: 'LOG_OUT_WITH_SUCCESSFULL'
        }
    }
     function logOutWithRejected(error){
         return {
             type: 'LOG_OUT_WITH_REJECTED',
             error: error
         }
     }





