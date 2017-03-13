import React ,{ Component } from 'react'
import * as MUI from 'material-ui'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
import FirebaseService from './../../firebase/firebaseService'
import {signIn , currentUserInfo} from './../../store/actions'
import './SignIn.css'



class SignIn extends Component{


  constructor(){
      super()
      this.state = {
          uid:'',
          email:'',
          pass:'',
         }
         this.handleSignIn = this.handleSignIn.bind(this)
     
  }
 

 handleSignIn(e){
     e.preventDefault();
     
     FirebaseService.LoginWithAuth(this.state)
     .then((user) => {
         this.setState({uid: user.uid})
         console.log(this.state)
         
         this.props.signIn(this.state)
         browserHistory.push('/home')

        firebase.database().ref('Users/' + user.uid).on('value', (snapshot) =>{
            const currentUser = snapshot.val()  
            console.log(currentUser)
            this.props.currentUser(currentUser)
         })
         
     }).catch(e => alert(e.message))

 }
 
  
    
    render(){
        return(
           
            <div>
               
              <MUI.MuiThemeProvider>
                  <div className="signin-container">
                      <MUI.Paper className="signin-paper" >
                          <h1>Log In</h1>
                      <form onSubmit={this.handleSignIn}>
                        <MUI.TextField  
                            value={this.state.email}
                            floatingLabelText="Email" 
                            hintText="Email"
                            fullWidth={true}
                            onChange={e => this.setState({email: e.target.value})}
                             />
                        <MUI.TextField  
                            value={this.state.pass}
                            floatingLabelText="Password" 
                            hintText="Password"
                            fullWidth={true}
                            type="password"
                            onChange={e => this.setState({pass: e.target.value})}
                            />
                       
                       <MUI.RaisedButton 
                                type="submit"
                                label="Sign In"
                                className="signin-btn"
                                primary={true}/>


                     </form>
                     </MUI.Paper >
                  </div>
               </MUI.MuiThemeProvider>   
                   
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        authReducer : state
    }
}

function mapDispatchToProps(dispatch){
    return{
        signIn: (data) => dispatch(signIn(data)),
        currentUser: (data) => dispatch(currentUserInfo(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);