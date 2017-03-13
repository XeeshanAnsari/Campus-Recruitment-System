import React ,{Component} from 'react'
import * as MUI from 'material-ui'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {newJobPost} from './../../store/actions'
import firebase from 'firebase'
import FirebaseService from './../../firebase/firebaseService'
import './postForm.css'

class PostForm extends Component{
    
    constructor(){
        super()
        this.handlePost = this.handlePost.bind(this)

    }
    handlePost(e){
        e.preventDefault();
        const job = {
            uid:this.props.user.uid,
            companyName:this.props.user.companyName,
            title: this.refs.jobTitle.getValue(),
            skills: this.refs.skillsRequired.getValue(),
            experience: this.refs.expRequired.getValue(),
            salary: this.refs.expRequired.getValue(),
            description: this.refs.jobDescription.getValue(),
        }

        let uid  = this.props.user.uid;
        
          
        FirebaseService.saveData('/jobs/' + uid , job)
        .then(() => {
            console.log(job);
            this.props.jobPost(job);

       }).catch(e => console.log(e.message))
        
    }
    
    render(){
        return(
            <div>
                <MUI.MuiThemeProvider>
                    <div className="post-container">
                        <MUI.Paper className="post-paper">
                        <form onSubmit={this.handlePost}>
                            <MUI.TextField  
                                hintText="Job Title"
                                floatingLabelText="Job Title"
                                fullWidth
                                ref="jobTitle"
                            />
                             <MUI.TextField
                                hintText="Skills Required"
                                floatingLabelText="Skills Required"
                                 fullWidth
                                ref="skillsRequired"
                             />
                           
                             <MUI.TextField
                                hintText="Experience Required"
                                floatingLabelText="Experience Required"
                                 fullWidth
                                ref="expRequired"
                             />
                              <MUI.TextField
                                hintText="Salary"
                                floatingLabelText="Salary"
                                 fullWidth
                                ref="salary"
                             />
                             
                              <MUI.TextField
                                hintText="Job Description"
                                floatingLabelText="Job Description"
                                fullWidth
                                ref="jobDescription"
                             />
                              
                             <MUI.RaisedButton
                                label ="Submit"
                                type="submit"
                                primary={true}
                                className="submit-btn"
                             />
                        </form>
                        </MUI.Paper>    
                     </div>   
                </MUI.MuiThemeProvider>    
            </div>    
        )
    }
}


function mapStateToProps(state){
    return {
        user: state.DataReducer.userInfo
       
    }
}

function mapDispatchToProps(dispatch){
    return{
        jobPost: (data) => dispatch(newJobPost(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)