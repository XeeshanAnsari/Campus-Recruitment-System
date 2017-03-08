import React ,{ Component } from 'react'
import * as MUI from 'material-ui'

import './SignIn.css'


class SignIn extends Component{


  constructor(){
      super()
      this.state = {
          email:'',
          pass:'',
         }
     
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

export default SignIn