import React , {Component ,PropTypes}  from 'react'
import * as MUI from 'material-ui'
import {connect} from 'react-redux'
import Buttons from '../Buttons/Buttons'
import { Link } from 'react-router'
import './AppBar.css'

class AppBar extends Component{
    
    static contextTypes ={
        router: PropTypes.object.isRequired
    }
    
  
    
    constructor(){
        super();
        this.state = {
            drawerOpen : false
        }
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
       
    }
    
    handleDrawerToggle(){
        this.setState({drawerOpen: !this.state.drawerOpen})
    }
    
    drawerMenu(){
        return(
            <div>
               <div className="navigation-div"> 
                   <MUI.Avatar />
                   <span className='user-name' >{this.props.userAuth.firstName + ' '  +this.props.userAuth.lastName  }</span>
               </div>
                {
                    (this.props.userAuth.userType  == 'Student' || this.props.userAuth.userType  == 'Admin' ) ?
                    <div>
                    <MUI.MenuItem
                    className="navigation-menuItem"
                    primaryText="Register As Student"
                    containerElement={<Link to="/registration"/>}
                    />
                    {/*<MUI.MenuItem
                        className="navigation-menuItem"
                        primaryText="View My Resume"                    
                        onTouchTap={this.context.router.push("/viewStudentDetails/" + this.props.userAuth.uid)}
                        />*/}
                    
                    <MUI.MenuItem
                        className="navigation-menuItem"
                        primaryText="View Jobs"                    
                        containerElement={<Link to="/viewAlljobs"/>}
                        />
                   
                </div>: null
                }
                 {
                    (this.props.userAuth.userType == 'Company' || this.props.userAuth.userType  == 'Admin' ) ?
                    <div>
                        <MUI.MenuItem
                        className="navigation-menuItem"
                        primaryText="Post a JOb"
                        containerElement={<Link to="/jobPost"/>}
                        />
                        {/*<MUI.MenuItem
                            className="navigation-menuItem"
                            primaryText="View My Job"                    
                            containerElement={<Link to="/viewjobDetail"/>}
                            />*/}
                       
                        <MUI.MenuItem
                            className="navigation-menuItem"
                            primaryText="View Students"                    
                            containerElement={<Link to="/viewAllStudents"/>}
                            /> 
                    </div>: null

                 }
            </div>
        )
    }
    render(){
        return(
            <div>
                <MUI.MuiThemeProvider>
                   <div>
                      <MUI.AppBar  
                      title="campus Recruitment System" 
                      onLeftIconButtonTouchTap={this.handleDrawerToggle}
                      iconElementRight={<Buttons />}
                      /> 
                  
                      <MUI.Drawer open={this.state.drawerOpen} docked={false}
                                onRequestChange={this.handleDrawerToggle}>
                                {this.drawerMenu()}
                            </MUI.Drawer>
                    {this.props.children}
                   </div>
               </ MUI.MuiThemeProvider >
               
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        isAuthenticated : state.AuthReducer.isAuthenticated,
        userAuth: state.AuthReducer.userAuth
    }
}



export default connect(mapStateToProps )(AppBar);