import React ,{Component} from 'react'
import * as MUI from 'material-ui'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
// import  {browserHistory}  from 'react-router'
// import FirebaseService from './../../firebase/firebaseService'
import './viewDetails.css'

class ViewStudentDetails extends Component{
    
   
    componentMillMount(){
        this.props.getSingleStudentDetails(this.props.params.id);
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
                          <h1>Details</h1>
                          <div className="detail">
                              <div><b>Full Name :</b> { this.props.student.fullName}</div>
                              <div><b>Email :</b> { this.props.student.email}</div>
                              <div><b>Gender :</b> { this.props.student.gender}</div>
                              <div><b>Last Education : </b> {this.props.student.lastEdu} </div>
                              <div><b>Last Education Year : </b> {this.props.student.eduYear} </div>
                              <div><b>Last Education Grade : </b> {this.props.student.eduGrade}</div>
                              <div><b>Professional Experience : </b> {this.props.student.professionalExp}</div>
                              <div><b>Skills :</b> {this.props.student.skills} </div>
                              <div><b>Personal & Professional Descripation :</b> {this.props.student.description}</div>
                              
                             
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


