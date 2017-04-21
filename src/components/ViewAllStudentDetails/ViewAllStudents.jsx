import React ,{Component , PropTypes} from 'react'
import * as MUI from 'material-ui'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import './viewAllStudents.css'

class ViewAllStudents extends Component{
   
   static contextTypes = {
    router: PropTypes.object.isRequired
  }
   constructor(){
       super();
      
       this.handleStudentList = this.handleStudentList.bind(this)
       this.handleViewStudent = this.handleViewStudent.bind(this)
      
   }
   
   
   handleViewStudent(id){
       console.log(id)
       this.context.router.push('/viewStudentDetails/' + id)
       
   } 
   componentWillMount(){
       if(this.props.isAuth !== true){
           this.context.router.push('/login')
       }else{
       this.props.getAllStudents();
       }
   } 

   handleStudentList(){
      
      var studentList  = this.props.studentsList
      .map((student , i) =>{
          let uid  = student.uid
          return(
              
              <div key={student.uid}>
                  <MUI.ListItem                    
                     onClick={() =>  this.handleViewStudent(uid)}
                     primaryText={student.fullName}
                     secondaryText={student.gender}
                    
                  />
              </div>   
          )
      })

       return studentList;
   } 

    render(){
        return(
            <div>
                <MUI.MuiThemeProvider>
                    <div className="container">
                        <MUI.Paper className="paper" zDepth={2} >
                                                 
                            <MUI.List>
                                <MUI.Subheader  inset={false}>All Students</MUI.Subheader>
                                {
                                 (this.props.studentsList !== '') ?  this.handleStudentList() : null
                                }
                            </MUI.List>
                        </MUI.Paper>    
                     </div>   
                </MUI.MuiThemeProvider>    
            </div>   
        )
    }
}


export default ViewAllStudents


