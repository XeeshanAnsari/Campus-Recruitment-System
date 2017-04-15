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
      
   }
   
   handleDeleteStudent(e){
       e.preventDefault();
       console.log('Delete')
   }
   handleViewStudent(id){

        this.context.router.push("/viewStudentDetails/" + id);
       
       
   } 
   componentWillMount(){
       this.props.getAllStudents();
     
   } 

   handleStudentList(){
      
       var studentList = this.props.students
        .map((student , i ) => {
        console.log("Student item ",student);
       return (<div key={student.uid} className="students">
                  
                {/*{student.fullName}
                  <div className='actionBtn'><MUI.RaisedButton 
                        label ="View"
                        
                        secondary={true}
                        className="view-btn"/>
                     <MUI.RaisedButton 
                        label ="Delete"
                        onClick={this.handleDeleteStudent.bind(this)}
                        default={true}
                        className="view-btn"/></div>}*/}
                   
                    
                 

                  <MUI.ListItem                    
                     onClick={() =>  this.handleViewStudent(student.uid)}
                     primaryText={student.fullName}
                     secondaryText={"Gender: " + student.gender}
                    
                  />
                  {/*<b>{i}</b>
                  <b>{student.fullName}</b>
                  <span className="view-buttons">
                    
                 </span>
                                
                              
                           
                  <MUI.Divider />*/}
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
                        <MUI.Paper className="paper">
                                                 
                            {/*<MUI.List>*/}
                                <MUI.Subheader  inset={false}>All Students</MUI.Subheader>
                                {
                                this.handleStudentList()
                                }
                            {/*</MUI.List>*/}
                        </MUI.Paper>    
                     </div>   
                </MUI.MuiThemeProvider>    
            </div>   
        )
    }
}


export default ViewAllStudents


