import * as firebase from 'firebase'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDuv0c_MAEVHdMANJJsjZ2ILutfrHjpLUE",
    authDomain: "campus-system-redux.firebaseapp.com",
    databaseURL: "https://campus-system-redux.firebaseio.com",
    storageBucket: "campus-system-redux.appspot.com",
    messagingSenderId: "359661398390"
  };
firebase.initializeApp(config);


export default class FirebaseService {
   
    static ref = firebase.database().ref();
    static auth = firebase.auth();



   static SignUpWithAuth(user) { //AuthNewUser
        return this.auth.createUserWithEmailAndPassword(user.email, user.pass);
    } 
  
   static LoginWithAuth(user) { // login With Auth
        return this.auth.signInWithEmailAndPassword(user.email, user.pass);
    }
   static saveData(Path , user ) {
        return this.ref.child(Path).push(user);
    } 
}


