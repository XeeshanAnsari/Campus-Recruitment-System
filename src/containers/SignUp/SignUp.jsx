import React ,{Component} from 'react'
import * as MUI from 'material-ui'
import {Link} from 'react-router'
import './SignUp.css'

export default class SignUp extends Component{

    constructor(props){
      super(props)
      this.state = {
          fName:'',
          lName:'',
          email:'',
          pass:'',
          

      }
      
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
                                value={this.state.fName}
                                floatingLabelText="First Name" 
                                hintText="First Name"
                                fullWidth={true}
                                onChange={e => this.setState({fName: e.target.value})}
                                />
                            <MUI.TextField  
                                value={this.state.lName}
                                floatingLabelText="Last Name" 
                                hintText="Last Name"
                                fullWidth={true}
                            onChange={e => this.setState({lName: e.target.value})}
                                />
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
                                onChange={e => this.setState({pass: e.target.value})}
                                type="password"
                                />
                        
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