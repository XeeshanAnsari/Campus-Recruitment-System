import React ,{Component} from 'react'
import * as MUI from 'material-ui'
import {connect } from 'react-redux'
import {browserHistory} from 'react-router'
import {signUp} from './../../store/actions'
// import FirebaseService from './../../firebase/firebaseService'
import './SignUp.css'
import  {signUpWithAuth} from './../../store/actions'
export class SignUp extends Component{

    constructor(props){
      super(props)
      this.state={
          userType:"",
          user:"",
          companyName:"",
          gender:"",
          value: 1,
          key: 1,
          
      }
      this.handleSignUp = this.handleSignUp.bind(this)
  }
  //handele Signup
  handleSignUp(e){
      e.preventDefault();
      const newUser ={
           firstName: this.refs.firstName.getValue(),
           lastName: this.refs.lastName.getValue(),
           email: this.refs.email.getValue(),
           pass: this.refs.pass.getValue(),
           userType:this.state.userType,
           companyName: this.state.companyName,
           gender:this.state.gender,
      }
       console.log(newUser)
      this.props.signup(newUser);

    //   FirebaseService.SignUpWithAuth(newUser)
    //   .then((user) => {
          
    //       newUser.uid = user.uid
    //       FirebaseService.saveData( `Users/${user.uid}`, newUser) 
    //       this.props.signup(newUser)

    //       browserHistory.push('/signin') 
    //   }).catch((error) => alert(error.message))



     
  }
  handleGender(e,key){
       let val = key + 1;
       let gender;
       if(val === 1)  gender="Male" 
       else gender="Female"
       
       this.setState({
           key : val,
           gender : gender
           
       })
       console.log(val , gender)
  }

  // for userType 
  handleUserType(e,key){
       let value =  key+1;
       let userType;
       if(value === 1 ) userType="Company" 
       else userType="Student"
       this.setState({
           user: value,
           userType:userType
           
       })
      
      console.log(value,userType)

  }
 
    render(){
        return(
            <div>
              <MUI.MuiThemeProvider>
                  <div className="signup-container">
                    <MUI.Paper className="signup-paper" >
                        <h1>Sign Up</h1>
                        <form onSubmit={this.handleSignUp}>
                            <MUI.TextField  
                                ref="firstName"
                                floatingLabelText="First Name"
                                 
                                hintText="First Name"
                                fullWidth={true}
                                required
                                />
                            <MUI.TextField  
                                ref="lastName"
                                floatingLabelText="Last Name" 
                                hintText="Last Name"
                                fullWidth={true}
                                required
                                />
                            <MUI.TextField  
                                ref="email"
                                type='email'
                                floatingLabelText="Email" 
                                hintText="Email"
                                fullWidth={true}
                                required
                                />
                            <MUI.TextField  
                                ref="pass"
                                floatingLabelText="Password" 
                                hintText="Password"
                                fullWidth={true}
                                required
                                type="password"
                                />
                             <MUI.SelectField 
                             ref="userType"
                             floatingLabelText="User Type"
                             value={this.state.user}
                             fullWidth 
                             onChange={this.handleUserType.bind(this)} >

                                    <MUI.MenuItem value={1} primaryText="Company" />
                                    <MUI.MenuItem value={2} primaryText="Student" />

                              </MUI.SelectField>   
                              
                              {(this.state.userType === "Company")?
                               <MUI.TextField  
                                value={this.state.companyName}
                                floatingLabelText="Company Name" 
                                hintText="Company Name"
                                onChange={e => this.setState({companyName:e.target.value})}
                                fullWidth={true}
                                required
                                />
                                :null}
                                
                                
                     {(this.state.userType === "Student")?
                               <MUI.SelectField 
                                ref="gender"
                                floatingLabelText="Gender"
                                value={this.state.key}
                                fullWidth 
                                onChange={this.handleGender.bind(this)} >

                                    <MUI.MenuItem value={1} primaryText="Male" />
                                    <MUI.MenuItem value={2} primaryText="Female" />

                              </MUI.SelectField>  
                            :null}

                        
                        <MUI.RaisedButton 
                                type="submit"
                                    label="Signup"
                                    className="signup-btn"
                                    primary={true}
                                    />


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
        signup: (data) => dispatch(signUpWithAuth(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);