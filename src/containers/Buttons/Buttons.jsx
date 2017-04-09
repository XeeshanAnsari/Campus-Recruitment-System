import React ,{Component} from 'react'
import * as MUI from 'material-ui'
import {Link , browserHistory} from 'react-router'
// import FirebaseService from './../../firebase/firebaseService'
import {logOutWithAuth} from './../../store/actions'
import {connect} from 'react-redux'
import './Buttons.css'

 class Buttons extends Component{
    constructor(){
        super()
        this.handleLogOut = this.handleLogOut.bind(this)

    }

    handleLogOut(e){
        e.preventDefault();
         
        this.props.logout(); 
    //     FirebaseService.LogOut()
    //      .then(() => {
    //      console.log("LogOut success")
    //      this.props.signOut()
    //      browserHistory.push('/signin')
    //  }).catch(e => alert(e.message))    
        

    }


    render(){
        
        return(
            <div>
              <MUI.MuiThemeProvider>
                  <div >
                      
                     
                       { (this.props.isAuthenticated === false) 
                       ?  
                       <div>
                            {/*<MUI.DropDownMenu   >
                                <Link to='/registration'><MUI.MenuItem primaryText="Register" /></Link>
                                <Link to='/viewStudentDetail'><MUI.MenuItem  primaryText="View My Details" /></Link>
                          </MUI.DropDownMenu>  when of line                 */}
                            <Link to="/login"  className='buttons'><MUI.RaisedButton type="submit" primary={true} >Sign In</MUI.RaisedButton></Link>
                            <Link to="/signup"  className='buttons'><MUI.RaisedButton type="submit" primary={true} >Sign Up</MUI.RaisedButton></Link> 
                      </div>
                      :
                     <div>
                        
                         {/*<MUI.DropDownMenu   >
                              {(this.props.userType === "Student") ?
                                <div>
                                    <Link to='/registration'><MUI.MenuItem primaryText="Register Resume" /></Link>
                                    <Link to='/viewStudentDetail'><MUI.MenuItem  primaryText="View My Resume" /></Link>
                                    <Link to='/viewAllJobs'><MUI.MenuItem  primaryText="View Jobs" /></Link>
                                </div>
                             :null}
                             {(this.props.userType === "Company") ?
                                <div>                         
                                    <Link to='/jobPost'><MUI.MenuItem  primaryText="Post job" /></Link>
                                    <Link to='/viewJob'><MUI.MenuItem  primaryText="View Job" /></Link>
                                    <Link to='/viewAllStudents'><MUI.MenuItem  primaryText="View Students" /></Link>
                                </div>
                               :null }
                        </MUI.DropDownMenu>*/}
                        
                         <MUI.RaisedButton
                            onClick={this.handleLogOut}
                            className='buttons'
                            primary={true} 
                            
                            >
                            LogOut</MUI.RaisedButton>
                        
                        
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
        isAuthenticated : state.AuthReducer.isAuthenticated
    }
}

function mapDispatchToProps(dispatch){
    return{
        logout: () => dispatch(logOutWithAuth())
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Buttons);
