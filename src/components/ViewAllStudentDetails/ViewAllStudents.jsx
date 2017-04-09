import React ,{Component , PropTypes} from 'react'
import * as MUI from 'material-ui'
import {connect} from 'react-redux'
import './viewAllStudents.css'

class ViewAllStudents extends Component{
   
   static  contextType ={
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
   handleViewStudent(e){
       e.preventDefault();
       this.context.router.push("/viewStudentDetails"+id);
       
       
   } 
   componentWillMount(){
       this.props.getAllStudents();
   } 

   handleStudentList(){
       console.log(this.props.studentLists)
       var studentList = this.props.students
        .map((student , i ) => {
        console.log("Student item ",student);
       return (<div key={student.uid} className="students">
                  

                  <MUI.ListItem                    
                   
                    rightIcon={<div><MUI.RaisedButton 
                        label ="View"
                        onClick={this.handleViewStudent.bind(this)}
                        secondary={true}
                        className="view-btn"/>
                     <MUI.RaisedButton 
                        label ="Delete"
                        onClick={this.handleDeleteStudent.bind(this)}
                        default={true}
                        className="view-btn"/></div>}
                    primaryText={student.fullName}
                    secondaryText={"Blood Group: "+student.gender}
                    
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
                                                 
                            <MUI.List>
                                <MUI.Subheader  inset={false}>All Students</MUI.Subheader>
                                {
                                this.handleStudentList()
                                }
                            </MUI.List>
                        </MUI.Paper>    
                     </div>   
                </MUI.MuiThemeProvider>    
            </div>   
        )
    }
}

//  function mapStateToProps(state){
//     return {
//         //    jobs :
//         }
//     }

//   function mapDispatchToProps(dispatch){
//     return{
       
//         }
//     }


// export default connect(mapStateToProps, mapDispatchToProps)(ViewAllStudents)
export default ViewAllStudents

