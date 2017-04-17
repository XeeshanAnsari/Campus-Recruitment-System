import React ,{Component}  from 'react'

import {Router , Route , IndexRoute , browserHistory} from 'react-router'
import {AppBar ,Buttons ,SignUp ,SignIn , Home } from './containers'
import {StudentRegister,ViewAllStudents , DashBoard ,JobPostForm ,ViewStudentDetails , ViewAllJobs , ViewJobDetails}  from './containers'

import injectTapEventPlugin from 'react-tap-event-plugin'; //react-tap-event-plugin provides onTouchTap() to all React Components.
injectTapEventPlugin();


class App extends Component{
    render(){
        return(
            <div>
                <Router history={browserHistory}>
                    <Route path='/' component={AppBar}>
                       {/*<Route path='dashboard' component={DashBoard}>
                           <Route path='registration' component={StudentRegister} />
                        </Route>*/}

                       <Route path="/signup" component={SignUp} />
                       <Route path="/login" component={SignIn} />
                       <Route path="/registration" component={StudentRegister} />
                       <Route path="/viewStudentDetails/:id" component={ViewStudentDetails} />
                       <Route path="/viewAllStudents" component={ViewAllStudents} />
                       <Route path="/jobPost" component={JobPostForm} />
                       <Route path="/viewAllJobs" component={ViewAllJobs} />
                       <Route path="/viewJobDetails/:id" component={ViewJobDetails} />
                       {/*<Route path="/home" component={Home} />*/}
                    </Route>
                   
                </Router>
            </div>
        )
    }
}

export default App