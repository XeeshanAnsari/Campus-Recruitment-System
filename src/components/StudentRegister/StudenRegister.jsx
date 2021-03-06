import React ,{Component , PropTypes} from 'react'
import * as MUI from 'material-ui'
import './studentRegister.css'

class StudentRegister extends Component{
    
    static contextTypes = {
    router: PropTypes.object.isRequired
  }
    constructor(){
        super()
        this.handleRegister = this.handleRegister.bind(this)

    }
    // componentWillReceiveProps(nextProps){
    //    if(this.props.isAuth !== true){
    //        this.context.router.push('/login')
    //     }
    //    }
    componentWillMount(){
    if(this.props.isAuth !== true){
           this.context.router.push('/login')
       }
    }

    handleRegister(e){
        // (this.porps.user.uerType === "Student") ? browserHistory.push('/home') : null
         e.preventDefault();
         console.log(this.props.userAuth)
     const studentData = {
            uid: this.props.userAuth.uid,
            fullName: this.props.userAuth.firstName + this.props.userAuth.lastName,
            email: this.props.userAuth.email,
            gender:this.props.userAuth.gender,
            lastEdu: this.refs.lastEdu.getValue(),
            eduYear: this.refs.eduYear.getValue(),
            eduGrade: this.refs.eduGrade.getValue(),
            professionalExp: this.refs.professionalExp.getValue(),
            skills: this.refs.skills.getValue(),
            description: this.refs.description.getValue()

        }
         
         this.props.studentRegister(studentData) 
     
       
        
    }
    
    render(){
        return(
            <div>
                <MUI.MuiThemeProvider>
                    <div className="stu-container">
                        <MUI.Paper className="stu-paper">
                        <form onSubmit={this.handleRegister}>
                            <MUI.TextField  
                                hintText="Last Education"
                                floatingLabelText="Last Education"
                                fullWidth
                                ref="lastEdu"
                            />
                             <MUI.TextField
                                hintText="Last Education Year"
                                floatingLabelText="Last Education Year"
                                 fullWidth
                                ref="eduYear"
                             />
                            <MUI.TextField
                                hintText="Last Education Grade"
                                floatingLabelText="Last Education Grade"
                                 fullWidth
                                ref="eduGrade"
                             />
                             <MUI.TextField
                                hintText="Professional Experience"
                                floatingLabelText="Professional Experience"
                                 fullWidth
                                ref="professionalExp"
                             />
                             <MUI.TextField
                                hintText="Skills"
                                floatingLabelText="Skills"
                                fullWidth
                                ref="skills"
                             />
                              <MUI.TextField
                                hintText="Personal & Professional Description"
                                floatingLabelText="Personal & Professional Description"
                                fullWidth
                                ref="description"
                             />
                              
                             <MUI.RaisedButton
                                label ="Submit"
                                type="submit"
                                primary={true}
                                className="submit-btn"
                             />
                        </form>
                        </MUI.Paper>    
                     </div>   
                </MUI.MuiThemeProvider>    
            </div>    
        )
    }
}


export default StudentRegister