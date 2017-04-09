import React ,{Component} from 'react'
import * as MUI from 'material-ui'
import * as firebase from 'firebase'
import {viewJobPost} from './../../store/actions'
import {connect} from 'react-redux'
import './viewAllJobs.css'

class ViewAllJobs extends Component{
   

   constructor(){
       super()
       this.state = {
           jobs:[]
       }
   }
   
//    componentWillMount(){
              
//               var jobArray = [];
             
//        firebase.database().ref('jobs/').on('value', (snapshot) =>{
            
           
//             this.setState({jobs:snapshot})  
//             console.log('Data'+ snapshot)
//             this.props.viewJobs(jobArray)
                  
//         })
//         // browserHistory.push('/signin');
       
//         }

//    handleDeleteJob(e){
//        e.preventDefault();
//        console.log('Delete')
//    }
//    handleViewJob(e){
//        e.preventDefault();
//        console.log("kufut")
       
//    }  
    
    render(){
        return(
            <div>
                <MUI.MuiThemeProvider>
                    <div className="container">
                        <MUI.Paper className="paper">
                          <h1>All Jobs</h1>
                          <b>saffsa</b>
                            {console.log(this.props.jobs)}
                            {
                              this.props.jobs.map(job=> {
                             
                            
                              <h2>dsgdsdsg{job.salary}</h2>
                              
                          }) 
                            }
                         
                         {/*{ this.state.jobs.map(function(value , index){
                            
                          
                            <div>
                                 
                               <b>{console.log("safsafsa" + this.state.jobs)}</b>
                                 <span className="view-buttons">
                                   
                                    <MUI.RaisedButton 
                                        label ="View"                                      
                                        
                                        secondary={true}
                                        className="view-btn"/>
                                    <MUI.RaisedButton 
                                        label ="Delete"
                                        
                                       default={true}
                                        className="view-btn"/>
                                 </span>
                                
                              
                           </div>
  
                          })}*/}
                         
                        </MUI.Paper>    
                     </div>   
                </MUI.MuiThemeProvider>    
            </div>   
        )
    }
}

 function mapStateToProps(state){
    return {
        jobs: state.CompanyReducer.jobDetails
         
        }
    }

  function mapDispatchToProps(dispatch){
    return{
        //   viewJobs: (data) => dispatch(viewJobPost(data ))
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(ViewAllJobs)


