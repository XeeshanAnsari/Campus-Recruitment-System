import React ,{Component , PropTypes} from 'react'
import * as MUI from 'material-ui'
import {viewJobPost} from './../../store/actions'
import './viewAllJobs.css'

class ViewAllJobs extends Component{
   
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
   constructor(){
       super()
       this.handleJobsList = this.handleJobsList.bind(this)
       this.handlesingleJob =  this.handlesingleJob.bind(this)
   }
   
   
   componentWillMount(){
       if(this.props.isAuth !== true){
           this.context.router.push('/login')
       }else{
       this.props.getJobs();
       }
   }

   handlesingleJob(id){
       this.context.router.push('/viewJobDetails/' + id)
   }
   handleJobsList(){
       console.log(this.props.jobsList)
     
     var jobsList  = this.props.jobsList
      .map((job , i) =>{
          return(
              <div key={job.uid}>
                  <MUI.ListItem                    
                     onClick={() =>  this.handlesingleJob(job.uid)}
                     primaryText={job.title}
                     secondaryText={job.description}
                    
                  />
              </div>   
          )
      })
      
       return jobsList;
   }

    render(){
        return(
            <div>
                <MUI.MuiThemeProvider>
                    <div className="container">
                        <MUI.Paper className="paper">
                           <MUI.List>
                                <MUI.Subheader  inset={false}>All Jobs</MUI.Subheader>
                                {
                                (this.props.jobsList !== '') ? this.handleJobsList(): null
                                }
                            </MUI.List>
                        </MUI.Paper>    
                     </div>   
                </MUI.MuiThemeProvider>    
            </div>   
        )
    }
}

 


export default ViewAllJobs;


