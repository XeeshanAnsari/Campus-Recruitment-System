import React ,{Component ,PropTypes} from 'react'
import * as MUI from 'material-ui'
import './viewJob.css'

class ViewJobDetails extends Component{
    
    static contextType ={
        router: PropTypes.object.isRequired
    }
    
    constructor(){
        super()
        this.handleDelete =  this.handleDelete.bind(this)
    }
    componentWillMount(){
      if(this.props.isAuth !== true){
           this.context.router.push('/login')
       }else{
        console.log(this.props.params.id);
        this.props.getSingleJobDetails(this.props.params.id)
       }
    }     
//    componentWillReceiveProps(nextProps){
//         setTimeout(()=>{
//            if(this.props.isAuth !== true){
//                this.context.router.push('/login')
//            }
//         })
//     }
     handleDelete(){
        console.log(this.props.job.uid)
        this.props.deleteJob(this.props.job.uid);
       
    }
    render(){
        return(
            <div>
                <MUI.MuiThemeProvider>
                    <div className="container">
                        <MUI.Paper className="paper">
                          <h1>Details</h1>
                          <div className="detail">
                              <div><b>Compnay Name :</b> {this.props.job.companyName }</div>
                              <div><b>Job Title : </b> {this.props.job.title } </div>
                              <div><b>Skills requied : </b> {this.props.job.skills} </div>
                              <div><b>Skills requied : </b> {this.props.job.salary} </div>
                              <div><b>Experience requied : </b> {this.props.job.experience}</div>
                              <div><b>Job Descripation : </b> {this.props.job.description}</div>
                              {(this.props.userAuth.userType  == 'Admin') ?
                                   <MUI.RaisedButton
                                      onClick={this.handleDelete}
                                      primary={true}
                                      className='delete-btn'
                                           >
                                      DELETE</MUI.RaisedButton>
                                        : null
                              }
                             
                          </div>
                        </MUI.Paper>    
                     </div>   
                </MUI.MuiThemeProvider>    
            </div>   
        )
    }
}

export default ViewJobDetails


