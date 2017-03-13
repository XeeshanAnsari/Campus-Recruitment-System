import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {viewStudentDetails, viewJobPost}  from './../../store/actions'
import * as firebase from 'firebase'
import  {browserHistory}  from 'react-router'
import {currentUserInfo} from './../../store/actions/authAction'
import './home.css'

class Home extends Component{
    
    
   componentWillMount(){
 
       let uid = this.props.user.uid
      // for studentsDetail Get form firebase
       firebase.database().ref('studentsDetail/'+ uid).on('value', (snapshot) =>{
            const studentDetails = snapshot.val()  
            console.log(studentDetails)
            this.props.viewDetails(studentDetails)
        
        })
           // for job Get form firebase
       firebase.database().ref('jobs/'+ uid).on('value', (snapshot) =>{
            const job = snapshot.val()  
            console.log(job)
            this.props.viewJobPost(job)
        
        })
        
   }
  
  

    
   
    
    render(){
        return(
            <div>
                Home  Working!
            </div>   
        )
    }
}

 function mapStateToProps(state){
    return {
        user : state.AuthReducer.user
            
        }
    }

  function mapDispatchToProps(dispatch){
    return{
          viewDetails: (data) => dispatch(viewStudentDetails(data)),
          viewJobPost: (data) => dispatch(viewJobPost(data))
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(Home)


