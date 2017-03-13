import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {viewStudentDetails}  from './../../store/actions'
import * as firebase from 'firebase'
import  {browserHistory}  from 'react-router'
import {currentUserInfo} from './../../store/actions/authAction'
import './home.css'

class Home extends Component{
    
    
   componentWillMount(){
  console.log()
       let uid = this.props.user.uid
      
       firebase.database().ref('studentsDetail/'+ uid).on('value', (snapshot) =>{
            const studentDetails = snapshot.val()  
            console.log(studentDetails)
            this.props.viewDetails(studentDetails)
         })
        // firebase.database().ref('jobs/').on('child_added', (snapshot) =>{
        //     const jobs = snapshot.val()  
        //     console.log(jobs)
        //     this.props.viewJobPost(jobs)
        //  })
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
          viewDetails: (data) => dispatch(viewStudentDetails(data))
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(Home)


