import React ,{Component} from 'react'
import * as MUI from 'material-ui'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
// import  {browserHistory}  from 'react-router'
// import FirebaseService from './../../firebase/firebaseService'
import './viewDetails.css'

class ViewStudentDetails extends Component{
    
   
    componentWillMount(){
        console.log(this.props.params.id)
        this.props.getStudentDetails(this.props.params.id);
    }

    // componentMillMount(){
    //     let uid = this.props.user.uid;
       
    //    firebase.database().ref('studentsDetail/'+ uid).on('value', (snapshot) =>{
    //         const studentDetails = snapshot.val()  
    //         console.log(studentDetails)
    //         this.setState({data: studentDetails})
            
    //         this.props.viewDetails(studentDetails)
                    
    //     })
    //     // browserHistory.push('/signin');
       
    //     // .then((studentDetails) => {
    //     //      this.props.viewDetails()
    //     //      console.log(studentDetails)
    //     // })

       
    // }
    
   
    
    render(){
        return(
            
            <div>
                
                <MUI.MuiThemeProvider>
                    <div className="container">
                        <MUI.Paper className="paper">
                          
                           {/*{this.props.students
                              .filter((student=>student.uid!== this.props.params.id))
                              .map((student, i)=>{
                              return(
                                  <div className="detail" key={i}>
                                        <div><b>Full Name :</b> {student.fullName}</div>
                                        <div><b>Email :</b> { student.email}</div>
                                        <div><b>Gender :</b> { student.gender}</div>
                                        <div><b>Last Education : </b> {student.lastEdu} </div>
                                        <div><b>Last Education Year : </b> {student.eduYear} </div>
                                        <div><b>Last Education Grade : </b> {student.eduGrade}</div>
                                        <div><b>Professional Experience : </b> {student.professionalExp}</div>
                                        <div><b>Skills :</b> {student.skills} </div>
                                        <div><b>Personal & Professional Descripation :</b> {student.description}</div>
                                        
                                        
                                    </div>
                              )

                          })}*/}
                          
                                 <div className="detail">
                                      <h1>Details</h1>
                                        <div><b>Full Name :</b> {this.props.singleStudent.fullName}</div>
                                        <div><b>Email :</b> {this.props.singleStudent.email}</div>
                                        <div><b>Gender :</b> {this.props.singleStudent.gender}</div>
                                        <div><b>Last Education : </b> {this.props.singleStudent.lastEdu} </div>
                                        <div><b>Last Education Year : </b> {this.props.singleStudent.eduYear} </div>
                                        <div><b>Last Education Grade : </b> {this.props.singleStudent.eduGrade}</div>
                                        <div><b>Professional Experience : </b> {this.props.singleStudent.professionalExp}</div>
                                        <div><b>Skills :</b> {this.props.singleStudent.skills} </div>
                                        <div><b>Personal & Professional Descripation :</b> {this.props.singleStudent.description}</div>
                                        
                                        
                                    </div>
                        </MUI.Paper>    
                     </div>   
                </MUI.MuiThemeProvider>    
            </div>   
        )
    }
}

//  function mapStateToProps(state){
//     return {
        
//         user : state.DataReducer.userInfo,
//         student: state.StudentReducer.studentDetails
            
//         }
//     }

//   function mapDispatchToProps(dispatch){
//     return{
//         viewDetails: (data) => dispatch(viewStudentDetails(data))
//         }
//     }


// export default connect(mapStateToProps, mapDispatchToProps)(ViewStudentDetails)
export default ViewStudentDetails


