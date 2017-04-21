import React ,{Component ,PropTypes} from 'react'
import * as MUI from 'material-ui'
import {connect} from 'react-redux'
import './viewDetails.css'

class ViewStudentDetails extends Component{
      
     static contextType ={
        router: PropTypes.object.isRequired
    }  
   constructor(){
       super()
       this.handleDelete = this.handleDelete.bind(this)
   }
   componentWillMount(){
       
        this.props.getStudentDetails(this.props.params.id)
       
    } 
    componentWillReceiveProps(nextProps){
        setTimeout(()=>{
           if(this.props.isAuth !== true){
               this.context.router.push('/login')
           }
        })
    }
    handleDelete(){
        console.log(this.props.singleStudent.uid)
        this.props.deleteStudent(this.props.singleStudent.uid);
       
    }

     render(){
        return(
            <div>
                <MUI.MuiThemeProvider>
                    <div className="container">
                        <MUI.Paper className="paper">
                          
                                <div className="detail" >
                                      <h1>Details</h1>
                                        <div><b>Full Name :</b> {this.props.singleStudent.fullName}</div>
                                        <div><b>Email :</b> {this.props.singleStudent.email}</div>
                                        <div><b>Gender :</b> {this.props.singleStudent.gender}</div>
                                        <div><b>Last Education : </b> {this.props.singleStudent.lastEdu} </div>
                                        <div><b>Last Education Year : </b> {this.props.singleStudent.eduYear} </div>
                                        <div><b>Last Education Grade : </b> {this.props.singleStudent.eduGrade}</div>
                                        <div><b>Professional Experience : </b> {this.props.singleStudent.professionalExp}</div>
                                        <div><b>Skills :</b> {this.props.singleStudent.skills} </div>
                                        <div><b>Personal and Professional Descripation :</b> {this.props.singleStudent.description}</div>
                                        {(this.props.userAuth.userType  == 'Admin') ?
                                            <MUI.RaisedButton
                                                onClick={this.handleDelete}
                                                primary={true}
                                                className='delete-btn'
                                                    >
                                                DELETE</MUI.RaisedButton>
                                                    : null
                                        }
                                    </div>
                        </MUI.Paper>    
                     </div>   
                </MUI.MuiThemeProvider>    
            </div>   
        )
    }
    
}


export default ViewStudentDetails


