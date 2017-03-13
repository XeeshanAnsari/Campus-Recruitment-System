import React ,{Component} from 'react'
import * as MUI from 'material-ui'
import {connect} from 'react-redux'
import {viewJobPost}  from './../../store/actions'
import * as firebase from 'firebase'
import  {browserHistory}  from 'react-router'
import FirebaseService from './../../firebase/firebaseService'
import './viewDetails.css'

class ViewJob extends Component{
    
    constructor(){
        super()
        
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
       
       

       
    // }
    
   
    
    render(){
        return(
            <div>
                <MUI.MuiThemeProvider>
                    <div className="container">
                        <MUI.Paper className="paper">
                          <h1>Details</h1>
                          <div className="detail">
                              <div><b>Compnay Name :</b> { }</div>
                              <div><b>Job Title : </b> {} </div>
                              <div><b>Skills requied : </b> {} </div>
                              <div><b>Experience requied : </b> {}</div>
                              <div><b>Job Descripation : </b> {}</div>
                              
                             
                          </div>
                        </MUI.Paper>    
                     </div>   
                </MUI.MuiThemeProvider>    
            </div>   
        )
    }
}

 function mapStateToProps(state){
    return {
        currentUser: state.AuthReducer.isLogged,
        user : state.AuthReducer.user,
        job: state.CompanyReducer.jobDetails
            
        }
    }

  function mapDispatchToProps(dispatch){
    return{
        viewJobPost: (data) => dispatch(viewJobPost(data))
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(ViewJob)


