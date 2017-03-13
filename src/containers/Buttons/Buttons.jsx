import React ,{Component} from 'react'
import * as MUI from 'material-ui'
import {Link , browserHistory} from 'react-router'
import AuthReducer from './../../store/reducers/authReducer'
import FirebaseService from './../../firebase/firebaseService'
import {LogOut} from './../../store/actions'
import {connect} from 'react-redux'
import './Buttons.css'

 class Buttons extends Component{
    constructor(){
        super()
        this.handleLogOut = this.handleLogOut.bind(this)

    }

    handleLogOut(e){
        e.preventDefault();

        FirebaseService.LogOut()
         .then(() => {
         console.log("LogOut success")
         this.props.signOut()
         browserHistory.push('/signin')
     }).catch(e => alert(e.message))    
        

    }


    render(){
        
        return(
            <div>
              <MUI.MuiThemeProvider>
                  <div >
                      
                     
                       { (this.props.isLogged === false) 
                       ?  
                       <div>
                            {/*<MUI.DropDownMenu   >
                                <Link to='/registration'><MUI.MenuItem primaryText="Register" /></Link>
                                <Link to='/viewStudentDetail'><MUI.MenuItem  primaryText="View My Details" /></Link>
                          </MUI.DropDownMenu>  when of line                 */}
                            <Link to="/signin"  className='buttons'><MUI.RaisedButton type="submit" primary={true} >Sign In</MUI.RaisedButton></Link>
                            <Link to="/signup"  className='buttons'><MUI.RaisedButton type="submit" primary={true} >Sign Up</MUI.RaisedButton></Link> 
                      </div>
                      :
                     <div>
                         {/*{(this.props.userStatus === "Company") ?*/}
                         <MUI.DropDownMenu   >
                                <Link to='/registration'><MUI.MenuItem primaryText="Register" /></Link>
                                <Link to='/viewStudentDetail'><MUI.MenuItem  primaryText="View My Details" /></Link>
                                <Link to='/jobPost'><MUI.MenuItem  primaryText="Post a job" /></Link>
                                <Link to='/viewJob'><MUI.MenuItem  primaryText="View Job" /></Link>
                        </MUI.DropDownMenu>
                        {/*:null}*/}
                         <MUI.RaisedButton
                        onClick={this.handleLogOut}
                        className='buttons'
                        type="submit"
                        primary={true} >
                        Log Out
                        </MUI.RaisedButton>
                      </div>   
                       }
                   </div>
                </MUI.MuiThemeProvider>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        isLogged: state.AuthReducer.isLogged,
        // userStatus: state.AuthReducer.
    }
}

function mapDispatchToProps(dispatch){
    return{
        signOut: () => dispatch(LogOut())
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Buttons);
