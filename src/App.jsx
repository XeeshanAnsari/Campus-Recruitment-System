import React ,{Component}  from 'react'

import {Router , Route , IndexRoute , browserHistory} from 'react-router'
import Buttons from './containers/Buttons/Buttons'
import AppBar from './containers/AppBar/AppBar'
import SignUp from './containers/SignUp/SignUp'
import injectTapEventPlugin from 'react-tap-event-plugin'; //react-tap-event-plugin provides onTouchTap() to all React Components.
injectTapEventPlugin();


class App extends Component{
    render(){
        return(
            <div>
                <Router history={browserHistory}>
                    <Route path='/' component={AppBar}>
                      
                       <Route path="/register" component={SignUp} />
                    </Route>
                </Router>
            </div>
        )
    }
}

export default App