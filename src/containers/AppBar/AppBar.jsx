import React , {Component}  from 'react'
import * as MUI from 'material-ui'
import Buttons from '../Buttons/Buttons'
import { Link } from 'react-router'
export default class AppBar extends Component{
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
                  <span ></span>
               </div>
                <div>
                    <MUI.MenuItem
                    className="navigation-menuItem"
                    primaryText="Register Resume"
                    containerElement={<Link to="/registration"/>}
                    />
                    <MUI.MenuItem
                        className="navigation-menuItem"
                        primaryText="View My Resume"                    
                        containerElement={<Link to="/viewStudentDetails"/>}
                        />
                    <MUI.Divider />
                    <MUI.MenuItem
                        className="navigation-menuItem"
                        primaryText="View Jobs"                    
                        containerElement={<Link to="/viewAlljobs"/>}
                        />
                </div>
                  <div>
                    <MUI.MenuItem
                    className="navigation-menuItem"
                    primaryText="Post a JOb"
                    containerElement={<Link to="/jobPost"/>}
                    />
                    <MUI.MenuItem
                        className="navigation-menuItem"
                        primaryText="View My Job"                    
                        containerElement={<Link to="/viewjobDetail"/>}
                        />
                    <MUI.Divider />
                    <MUI.MenuItem
                        className="navigation-menuItem"
                        primaryText="View Students"                    
                        containerElement={<Link to="/viewAllStudents"/>}
                        />
                </div>

            </div>
        )
    }
    render(){
        return(
            <div>
                <MUI.MuiThemeProvider>
                   <div>
                      <MUI.AppBar  
                      title="Campus System" 
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