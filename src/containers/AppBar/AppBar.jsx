import React , {Component}  from 'react'

import * as MUI from 'material-ui'
import Buttons from '../Buttons/Buttons'

export default class AppBar extends Component{
    render(){
        return(
            <div>
                <MUI.MuiThemeProvider>
                   <div>
                      <MUI.AppBar  title="Campus System" ><Buttons/> </MUI.AppBar>
                   </div>
               </MUI.MuiThemeProvider>   
               {this.props.children}
            </div>
        )
    }
}