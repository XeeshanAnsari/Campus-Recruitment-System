import AuthActions from '../actions/authAction'
import * as firebase from 'firebase'

export default class AuthMiddleware {
    

    // sign up
    static signUpWithAuth(user){
        console.log("safdsa");
        return (dispatch) => {
           
            dispatch(AuthActions.signUp())
            // AuthMiddleware.registerUserOnFirebase(dispatch,credentials);            
        }
    }
    //      return (dispatch) => {

    //         console.log("dada");
    //         dispatch(AuthActions.signUp(user));
            
    //         firebase.auth().createUserWithEmailAndPassword(user.email,user.pass)// authentecation
    //         .then((newUser) =>{
    //             user.uid = newUser.uid
    //             console("signup successfull", newUser);

    //             firebase.database().ref('/').child(`users/${user.uid}`).set(user)//save data in database
    //             .then((user)=>{
    //                 dispatch(AuthActions.signUpWithSuccessFull(user));
    //             })
    //         })
    //         .catch((error)=>{
    //              dispatch(AuthActions.signUpWithRejected(error));
    //         })
    //     }     
    // }

    // sign in
 }