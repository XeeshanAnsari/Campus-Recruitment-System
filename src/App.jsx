import React ,{Component}  from 'react'

import {Router , Route , IndexRoute , browserHistory} from 'react-router'
import {AppBar ,Buttons ,SignUp ,SignIn , Home} from './containers'
import  {StudentRegister , ViewStudentDetails ,PostForm ,ViewJob}    from './components'

import injectTapEventPlugin from 'react-tap-event-plugin'; //react-tap-event-plugin provides onTouchTap() to all React Components.
injectTapEventPlugin();


class App extends Component{
    render(){
        return(
            <div>
                <Router history={browserHistory}>
                    <Route path='/' component={AppBar}>
                      
                       <Route path="/signup" component={SignUp} />
                       <Route path="/signin" component={SignIn} />
                       <Route path="/registration" component={StudentRegister} />
                       <Route path="/viewStudentDetail" component={ViewStudentDetails} />
                       <Route path="/jobPost" component={PostForm} />
                       <Route path="/viewJob" component={ViewJob} />
                       <Route path="/home" component={Home} />
                    </Route>
                </Router>
            </div>
        )
    }
}

export default App