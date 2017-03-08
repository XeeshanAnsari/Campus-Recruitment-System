import React ,{Component} from 'react'
import * as MUI from 'material-ui'
import {Link} from 'react-router'
import './Buttons.css'

export default class Buttons extends Component{
    render(){
        return(
            <div>
              <MUI.MuiThemeProvider>
                  <div >
                    <Link to="/signin"  className='buttons'><MUI.RaisedButton type="submit" primary={true} >Sign In</MUI.RaisedButton></Link>
                    <Link to="/signup"  className='buttons'><MUI.RaisedButton type="submit" primary={true} >Sign Up</MUI.RaisedButton></Link>
                   </div>
                </MUI.MuiThemeProvider>
            </div>
        )
    }
}