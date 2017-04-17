import React ,{Component} from 'react'
import * as MUI from 'material-ui'
import {connect} from 'react-redux'
import {viewJobPost}  from './../../store/actions'
import * as firebase from 'firebase'
import  {browserHistory}  from 'react-router'
import FirebaseService from './../../firebase/firebaseService'
import './viewJob.css'

class ViewJobDetails extends Component{

    
    componentWillMount(){
        console.log(this.props.params.id);
        this.props.getSingleJobDetails(this.props.params.id)
    }     
    
    render(){
        return(
            <div>
                <MUI.MuiThemeProvider>
                    <div className="container">
                        <MUI.Paper className="paper">
                          <h1>Details</h1>
                          {/*{this.props.jobsList
                              .filter((job=>job.uid == this.props.params.id))
                              .map((job, i)=>{
                              return(
                                  <div className="detail" key={i}>
                                        <div><b>Compnay Name :</b> {job.companyName }</div>
                                        <div><b>Job Title : </b> {job.title } </div>
                                        <div><b>Skills requied : </b> {job.skills} </div>
                                        <div><b>Skills requied : </b> {job.salary} </div>
                                        <div><b>Experience requied : </b> {job.experience}</div>
                                        <div><b>Job Descripation : </b> {job.description}</div>
                                        
                                        
                                    </div>
                              )

                          })}*/}
                          <div className="detail">
                              <div><b>Compnay Name :</b> {this.props.job.companyName }</div>
                              <div><b>Job Title : </b> {this.props.job.title } </div>
                              <div><b>Skills requied : </b> {this.props.job.skills} </div>
                              <div><b>Skills requied : </b> {this.props.job.salary} </div>
                              <div><b>Experience requied : </b> {this.props.job.experience}</div>
                              <div><b>Job Descripation : </b> {this.props.job.description}</div>
                              
                             
                          </div>
                        </MUI.Paper>    
                     </div>   
                </MUI.MuiThemeProvider>    
            </div>   
        )
    }
}

export default ViewJobDetails


